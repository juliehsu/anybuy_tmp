### app/controllers/users/omniauth_callbacks_controller.rb
class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def facebook
    # You need to implement the method below in your model (e.g. app/models/user.rb)
    @user = User.find_for_facebook_oauth(request.env["omniauth.auth"], current_user)

    if @user.persisted?
      flash[:notice] = I18n.t "devise.omniauth_callbacks.success", :kind => "Facebook"
      sign_in_and_redirect @user, :event => :authentication
    else
      session["devise.facebook_data"] = request.env["omniauth.auth"]
      redirect_to new_user_registration_url
    end
  end



  def self.provides_callback_for(*providers)
    providers.each do |provider|
      class_eval %Q{
        def #{provider}
          if not current_user.blank?
            current_user.bind_service(env["omniauth.auth"])#Add an auth to existing
            redirect_to edit_user_registration_path, :notice => "成功绑定了 #{provider} 帐号。"
          else
            @user = User.find_or_create_for_#{provider}(env["omniauth.auth"])

            if @user.persisted?
              flash[:notice] = "Signed in with #{provider.to_s.titleize} successfully."
              sign_in_and_redirect @user, :event => :authentication, :notice => "登陆成功。"
            else
              redirect_to new_user_registration_url
            end
          end
        end
      }
    end
  end

  provides_callback_for :github, :twitter, :douban, :google

  # This is solution for existing accout want bind Google login but current_user is always nil
  # https://github.com/intridea/omniauth/issues/185
  def handle_unverified_request
    true
  end


end
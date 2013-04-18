# -*- encoding : utf-8 -*-
class ApplicationController < ActionController::Base
http_basic_authenticate_with :name => "admin", :password => "123"  
  layout :users
  
  protected

  def users
    if devise_controller?
      "users"
    else
      "application"
    end
  end
  protect_from_forgery
end

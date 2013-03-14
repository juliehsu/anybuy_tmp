# -*- encoding : utf-8 -*-
class ApplicationController < ActionController::Base
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

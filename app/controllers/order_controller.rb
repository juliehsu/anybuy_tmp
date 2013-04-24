class OrderController < ApplicationController
#authorize_resource :order
before_filter :authenticate_user!
  def buymoney
  end
end

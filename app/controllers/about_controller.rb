class AboutController < ApplicationController
  def message
   @messages = Message.order("created_at DESC").all
  end
  
  def new
  @message = Message.new  
  respond_to do |format|
      format.html
    end
  end
  
  def create
  @message = Message.new(params[:message])
  
  respond_to do |format|
      if @message.save
        format.html { redirect_to :action => :message }
      else
        format.html { render action: "new" }
      end
    end
  end
end

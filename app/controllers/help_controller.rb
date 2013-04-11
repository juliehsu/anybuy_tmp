# -*- encoding : utf-8 -*-
class HelpController < ApplicationController
  def tiro
  @title = "新手教學"
  end

  def question
  @title = "常見問題"
  end

  def contact
    @title = "聯絡我們"
    @contact = Contact.new  
    respond_to do |format|
      format.html
    end
  end
  
  def new
  
  end
    
  def create
    @contact = Contact.new(params[:contact])
  
  respond_to do |format|
      if @contact.save
        format.html { redirect_to :action => :contact }
      else
        format.html { render action: "contact" }
      end
    end
  end
  
  def destory
    @coontact = Contact.find(params[:id])
    @contact.destroy

    respond_to do |format|
      format.html { redirect_to :action => :contact}
    end
  end
  
end

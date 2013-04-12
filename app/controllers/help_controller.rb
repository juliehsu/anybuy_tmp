# -*- encoding : utf-8 -*-
class HelpController < ApplicationController

  def contact_index
    @contacts = Contact.order("created_at DESC").page(params[:page]).per(5)
  end
  
  def contact_show 
    @contact = Contact.find(params[:id])
   
  end
  
  def contact
    @title = "聯絡我們"
    @contact = Contact.new  
    respond_to do |format|
      format.html
    end
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
    @contact = Contact.find(params[:id])
    @contact.destroy

    respond_to do |format|
      format.html { redirect_to :action => :contact}
    end
  end
  
  
  
  def tiro
    @title = "新手教學"
  end

  def question
    @title = "常見問題"
  end
  
end

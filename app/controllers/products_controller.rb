# -*- encoding : utf-8 -*-
class ProductsController < ApplicationController
#http_basic_authenticate_with :name => "admin", :password => "123"  
 before_filter :authenticate_user! , :except => [ :show, :index ]	
 
  def index
    @title = "AnyBuy"
    @products_order = Product.where(["created_at > ?" , Time.now - 3.day] ).order("created_at  DESC")
    @products = @products_order.page(params[:page]).per(12)
    @bid_user = User.find_by_sql("SELECT  users.username FROM  products, users
                                       WHERE products.winner_id = users.id")
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @products }
    end
  end

  def show
    @product = Product.find(params[:id])
    @title = @product.title

    
    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @product }
    end
  end


  def new
    if current_user && current_user.is_admin
      @title = "新商品上架"
      @product = Product.new
    
      3.times { @product.images.build }
       respond_to do |format|
        format.html # new.html.erb
        format.json { render json: @product }
      end
    else
      respond_to do |format|
       format.html { redirect_to :action => :index }
       end
    end
  end


  def edit
    @product = Product.find(params[:id])
    3.times { @product.images.build }
  end


  def create
    @product = Product.new(params[:product])
     
    respond_to do |format|
      if @product.save
        format.html { redirect_to :action => :index }
        format.json { render json: @product, status: :created, location: @product }
      else
        format.html { render action: "new" }
        format.json { render json: @product.errors, status: :unprocessable_entity }
      end
    end
  end


  def update
    @product = Product.find(params[:id])
    
    respond_to do |format|
      if @product.update_attributes(params[:product])
        format.html { redirect_to @product }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @product.errors }
      end
    end
  end


  def destroy
    @product = Product.find(params[:id])
    @product.destroy

    respond_to do |format|
      format.html { redirect_to products_url }
      format.json { head :no_content }
    end
  end
    
 
 
end

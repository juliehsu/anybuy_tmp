# -*- encoding : utf-8 -*-
class User < ActiveRecord::Base
	has_many :bids
  has_many :products,  :through => :bids

  def is_admin?
		is_admin
	end

  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me, :username, :cname, :phone, :birthday, :nid, :address, :terms_of_service
  validates_confirmation_of :password
  validates_acceptance_of :terms_of_service
  validates :username, :cname, 
	    :length => {:minimum => 2, :maximum => 10 }

  validates_length_of :password, :password_confirmation, :is => 6
  validates_length_of :phone, :nid, :is => 10
  validates_numericality_of :phone, :only_integer => true
  validates_format_of :email, :with => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  # attr_accessible :title, :body
end

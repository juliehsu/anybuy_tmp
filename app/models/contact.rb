class Contact < ActiveRecord::Base
   attr_accessible :username, :phone, :email, :contact_message, :title
end

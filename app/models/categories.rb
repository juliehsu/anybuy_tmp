class Categories < ActiveRecord::Base
  belongs_to :product
  attr_accessible :pname, :ptitle
end

class AddOtherToUser < ActiveRecord::Migration
  def change
    add_column :users, :username, :string, :limit => 50,  :null => false
    add_column :users, :cname, :string, :limit => 50,  :null => false
    add_column :users, :nid, :string,  :limit => 10,  :null => false
    add_column :users, :phone, :string, :limit => 10,  :null => false
    add_column :users, :address, :string, :null => false
    add_column :users, :birthday, :date
    add_column :users, :money, :decimal
    add_column :users, :excerpt_image_file_name, :string
    add_column :users, :excerpt_image_content_type, :string
    add_column :users, :excerpt_image_file_size, :integer
    add_column :users, :excerpt_image_updated_at, :datetime

    
  end
end

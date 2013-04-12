class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :username
      t.string :phone
      t.string :email
      t.string :title
      t.text :contact_message
      t.datetime :create_at
      t.timestamps
    end
  end
end

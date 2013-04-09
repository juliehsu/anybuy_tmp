class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.string :title 
      t.text :content 
      t.datetime :created_at
      t.timestamps
    end
  end
end

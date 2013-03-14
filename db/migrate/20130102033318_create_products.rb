# -*- encoding : utf-8 -*-
class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :title
      t.text :description
      t.decimal :price
      t.decimal :primary_price
      t.integer :winner_id
      t.integer :categories_id
      t.datetime :created_at
      t.datetime :end_at          
       
      t.timestamps
    end
  end
end

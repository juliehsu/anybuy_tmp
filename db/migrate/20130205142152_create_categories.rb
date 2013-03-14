class CreateCategories < ActiveRecord::Migration
  def change
    create_table :categories do |t|
      t.string :pname
      t.string :ptitle

      t.timestamps
    end
  end
end

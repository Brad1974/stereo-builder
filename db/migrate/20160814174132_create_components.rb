class CreateComponents < ActiveRecord::Migration[5.0]
  def change
    create_table :components do |t|
      t.string :name
      t.integer :price
      t.string :category
      t.string :brand
      t.integer :user_id

      t.timestamps
    end
  end
end

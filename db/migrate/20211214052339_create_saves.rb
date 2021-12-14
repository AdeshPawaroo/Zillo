class CreateSaves < ActiveRecord::Migration[5.2]
  def change
    create_table :saves do |t|
      t.string :price, null: false
      t.string :address, null: false
      t.integer :beds, null: false
      t.integer :baths, null: false
      t.string :status, null: false
      t.integer :zipcode, null: false
      t.string :realator, null: false
      t.string :style, null: false
      t.text :description, null: false
      t.integer :sqft, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.integer :owner_id, null: false

      t.timestamps
    end
    add_index :saves, :owner_id
  end
end

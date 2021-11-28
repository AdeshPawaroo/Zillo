class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.integer :price, null: false
      t.string :address, null: false
      t.integer :beds, null: false
      t.integer :baths, null: false
      t.string :status, null: false
      t.integer :zipcode, null: false
      t.string :realator, null: false
      t.string :style, null: false
      t.text :description, null: false
      t.integer :state_id, null: false
      t.integer :city_id, null: false
      t.float :lat, null: false
      t.float :lng, null: false

      t.timestamps
    end
    add_index :listings, :city_id
    add_index :listings, :state_id
  end
end

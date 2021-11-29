class AddColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :sqft, :integer, null: false
  end
end

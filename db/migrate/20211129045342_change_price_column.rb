class ChangePriceColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :listings, :price
    add_column :listings, :price, :string, null: false
  end
end

class UpdateListingsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :owner_id, :integer, null: false
  end
end

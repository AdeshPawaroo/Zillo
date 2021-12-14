class UpdateListingsTableWithId < ActiveRecord::Migration[5.2]
  def change
    add_index :listings, :owner_id
  end
end

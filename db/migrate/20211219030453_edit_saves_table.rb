class EditSavesTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :saves, :listing_id
  end
end

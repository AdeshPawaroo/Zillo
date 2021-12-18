class AddColumnToSaves < ActiveRecord::Migration[5.2]
  def change
    add_column :saves, :listing_id, :integer, null: false
  end
end

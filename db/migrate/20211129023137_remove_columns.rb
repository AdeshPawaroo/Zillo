class RemoveColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :listings, :state_id
    remove_column :listings, :city_id
  end
end

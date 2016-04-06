class RemoveImageColumns < ActiveRecord::Migration
  def change
    remove_column :users, :avatar_url
    remove_column :tracks, :file_url
    remove_column :tracks, :image_url
  end
end

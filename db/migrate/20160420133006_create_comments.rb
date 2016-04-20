class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :track_id, null: false
      t.integer :user_id, null: false
      t.integer :seconds, null: false
      t.string :body, null: false

      t.timestamps null: false
    end
  end
end

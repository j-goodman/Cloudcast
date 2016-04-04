class CreateMemberships < ActiveRecord::Migration
  def change
    create_table :memberships do |t|
      t.integer :series_id, null: false
      t.integer :track_id, null: false
      t.integer :order, null: false

      t.timestamps null: false
    end
  end
end

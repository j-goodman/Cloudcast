class CreateSeries < ActiveRecord::Migration
  def change
    create_table :series do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end
  end
end

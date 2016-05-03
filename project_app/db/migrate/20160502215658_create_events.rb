class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|

      t.id :primary_key
      t.artist :string
      t.date :string
      t.venue :string

      t.timestamps null: false
    end
  end
end

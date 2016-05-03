class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|

      t.id :primary_key
      t.name :string
      t.artist :string
      t.album :string
      t.img :string
      t.sample :string

      t.timestamps null: false
    end
  end
end

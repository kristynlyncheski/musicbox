class CreateUsersSongs < ActiveRecord::Migration
  def change
    create_join_table :users, :songs do |t|

      # t.index :userId
      # t.index :songId
      t.boolean :selected
      # t.boolean :added_to_playlist
      t.datetime :date_added_to_playlist
      t.string :playlist_added_to
      t.datetime :created_date

      t.timestamps null: false
    end
  end
end

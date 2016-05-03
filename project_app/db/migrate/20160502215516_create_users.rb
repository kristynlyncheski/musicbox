class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|

      t.id :primary_key
      t.name :string
      t.email :string

      t.timestamps null: false
    end
  end
end

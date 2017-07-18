class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
    	t.string :name
    	t.string :email
    	t.datetime :birthday
    	t.integer :gender
    	t.text :pass

      t.timestamps
    end
  end
end

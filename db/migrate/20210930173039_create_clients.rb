class CreateClients < ActiveRecord::Migration[6.1]
  def change
    create_table :clients do |t|
      t.string :name
      t.string :profile_pic
      t.string :hairstyle_pic
      t.text :description
      t.string :password_digest

      t.timestamps
    end
  end
end

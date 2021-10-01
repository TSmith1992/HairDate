class CreateStylists < ActiveRecord::Migration[6.1]
  def change
    create_table :stylists do |t|
      t.belongs_to :salon, null: false, foreign_key: true
      t.string :name
      t.text :description
      t.date :years_active
      t.string :password_digest

      t.timestamps
    end
  end
end

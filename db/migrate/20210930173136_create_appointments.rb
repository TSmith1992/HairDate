class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.belongs_to :client, null: false, foreign_key: true
      t.belongs_to :stylist, null: false, foreign_key: true
      t.boolean :accepted
      t.integer :rating
      t.text :review

      t.timestamps
    end
  end
end

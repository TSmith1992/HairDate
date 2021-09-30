class CreateSalons < ActiveRecord::Migration[6.1]
  def change
    create_table :salons do |t|
      t.string :name
      t.string :address
      t.text :description
      t.time :opening_hours
      t.time :closing_hours

      t.timestamps
    end
  end
end

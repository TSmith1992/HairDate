class AddPostcutPicToAppointments < ActiveRecord::Migration[6.1]
  def change
    add_column :appointments, :postcut_pic, :string
  end
end

class AddProfilePicToStylists < ActiveRecord::Migration[6.1]
  def change
    add_column :stylists, :profile_pic, :string
  end
end

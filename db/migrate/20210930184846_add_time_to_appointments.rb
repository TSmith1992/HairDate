class AddTimeToAppointments < ActiveRecord::Migration[6.1]
  def change
    add_column :appointments, :start_time, :time
    add_column :appointments, :end_time, :time
  end
end

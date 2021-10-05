class Appointment < ApplicationRecord
  belongs_to :client
  belongs_to :stylist
  # belongs_to :salon, through: :stylist

  validates :client_id, presence: true
  validates :stylist_id, presence: true
  validates :date, uniqueness: {scope: [:start_time, :end_time, :stylist_id], message: 'Sorry, but that time is already booked'}

end

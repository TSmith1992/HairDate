class Appointment < ApplicationRecord
  belongs_to :client
  belongs_to :stylist

  validates :client_id, presence: true
  validates :stylist_id, presence: true
  validates :date, uniqueness: {scope: [:start_time, :end_time, :stylist_id], message: 'Sorry, but that time is already booked'}
  validate :one_hour_per_appointment
  validate :within_store_hours

  def one_hour_per_appointment
    errors.add(:end_time, "- Each session can't be more than an hour") if end_time - start_time > 1.hour
  end

  def within_store_hours
    errors.add(:end_time, "- Make sure you are choosing a time the salon is open") if end_time > self.stylist.salon.closing_hours || start_time < self.stylist.salon.opening_hours
  end
end

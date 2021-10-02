class Appointment < ApplicationRecord
  belongs_to :client
  belongs_to :stylist
  # belongs_to :salon, through: :stylist

  validates :client_id, presence: true
  validates :stylist_id, presence: true
  validates :date, uniqueness: {scope: [:start_time, :end_time, :stylist_id], message: 'Sorry, but that time is already booked'}
  # validates :start_time, numericality: {greater_than_or_equal_to: :stylist_id.salon_id.opening_hours}

  # validates :end_time, numericality: {less_than_or_equal_to: :stylist_id.salon_id.closing_hours}
  # validate :start_time_check
  # validate :end_time_check
  # validate :one_hour_per_appointment
  # validate :within_store_hours
  # validate :one_hour_per_appointment

  # def start_time_check
  #   errors.add(:start_time, "- Each session must begin after the stylist's Salon's opening hours") if self.start_time < self.stylist.salon.opening_hours 
  # end

  # def end_time_check
  #   errors.add(:end_time, "- Each session must end before the stylist's Salon's closing hours") if self.end_time > self.stylist.salon.closing_hours 
  # end

  # def one_hour_per_appointment
  #   errors.add(:end_time, "- Each session is for one hour") if (end_time - start_time) != 1.hour
  # end

  # def within_store_hours
  #   if self.start_time > self.stylist.salon.opening_hours|| self.end_time < self.stylist.salon.closing_hours
  #   else
  #     errors.add(:end_time, "- Make sure you are choosing a time the salon is open") 
  #   end
  # end
end

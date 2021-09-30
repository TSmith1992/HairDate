class Stylist < ApplicationRecord
  belongs_to :salon
  has_many :appointments, dependent: :destroy
  has_many :clients, through: :appointments
  has_secure_password
end

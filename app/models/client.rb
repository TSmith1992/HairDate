class Client < ApplicationRecord
    has_many :appointments, dependent: :destroy
    has_many :stylists, through: :appointments
    has_secure_password

    validates :profile_pic, presence: true
    validates :hairstyle_pic, presence: true
end

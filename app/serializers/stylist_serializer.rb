class StylistSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :years_active, :password_digest, :appointments, :profile_pic
  has_one :salon
  has_many :appointments

end

class StylistSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :years_active, :password_digest, :appointments
  has_one :salon

end

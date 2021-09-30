class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :accepted, :rating, :review
  has_one :client
  has_one :stylist
end

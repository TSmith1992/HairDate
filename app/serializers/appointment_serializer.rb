class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :accepted, :rating, :review, :postcut_pic, :start_time, :end_time, :date
  has_one :client
  has_one :stylist
end

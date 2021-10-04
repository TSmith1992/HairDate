class SalonSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :description, :opening_hours, :closing_hours

  has_many :stylists
end

class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :profile_pic, :hairstyle_pic, :description, :password_digest, :appointments
end

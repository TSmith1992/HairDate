class StylistSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :years_active, :password_digest, :appointments, :profile_pic, :avg_rating, :avg_rating_salon
  has_one :salon
  has_many :appointments

  def avg_rating
    stylist = Stylist.find_by(id: self.object.id)
    if stylist.appointments.length<1
      avg_rating = 5
    else
      stylist_rating_sum = stylist.appointments.map{|appointment| appointment.rating}.sum
      stylist_rating_length = stylist.appointments.map{|appointment| appointment.rating}.length
      stylist_rating_sum/stylist_rating_length
    end
  end

  def avg_rating_salon
    salon_stylists = Salon.find_by(id: self.object.salon_id).stylists.map{|person| person.appointments.map{|appointment| appointment.rating}.sum}.sum

    salon_stylists_length = Salon.find_by(id: self.object.salon_id).stylists.map{|person| person.appointments.map{|appointment| appointment.rating}.length}.sum
    
    salon_stylists/salon_stylists_length
  end

end

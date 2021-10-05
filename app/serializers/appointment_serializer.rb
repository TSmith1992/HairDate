class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :accepted, :rating, :review, :postcut_pic, :start_time, :end_time, :date
  has_one :client
  has_one :stylist
  # attribute :start_time_just_time

  # def start_time_just_time
  #   s_time=self.start_time.strftime('%H %M')
  #   s_time
  # end
end

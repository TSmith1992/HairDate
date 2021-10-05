class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :accepted, :rating, :review, :postcut_pic, :start_time_just_time, :end_time_just_time, :date
  has_one :client
  has_one :stylist

  def start_time_just_time
    s_time=Time.strftime(self.start_time)
    s_time
  end
end

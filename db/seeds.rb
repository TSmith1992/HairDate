# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# puts "Seeding Salons..."

# bs1 = Salon.create(
#     name:"Best Kutz Salon", 
#     address: "555 Main Street", 
#     description: "We love cutting hair!", 
#     opening_hours: "9:00:00", 
#     closing_hours: "21:00:00"
#     )
# bs2 = Salon.create(
#     name: "Full Hair 4 U", 
#     address: "123 Broad Street", 
#     description: "You want more hair, we want more service!", 
#     opening_hours:"8:00:00", 
#     closing_hours:"19:00:00"
#     )
# bs3 = Salon.create(
#     name: "Follicle Fury", 
#     address: "150 West Sixth Street", 
#     description: "We're MAD about hair!", 
#     opening_hours:"9:00:00", 
#     closing_hours: "17:00:00"
#     )
# bs4 = Salon.create(
#     name: "Hair Me Up", 
#     address:"999 Saint Street", 
#     description: "Let's talk about HAIR baby!", 
#     opening_hours:"10:00:00", 
#     closing_hours: "22:00:00"
#     )

# puts "Done Seeding Salons..."

# puts "Seeding Stylists..."

# 10.times do
#     Stylist.update(
#         salon_id: rand(1..4),
#         name: Faker::Name.name,
#         description: Faker::Quotes::Shakespeare.hamlet_quote,
#         years_active: Faker::Date.between(from: '1990-09-23', to: '2021-09-25'),
#         password: "123",
#         profile_pic: "https://i.insider.com/5fc12c8850e71a0011557ae9?width=700"

#         )
# end

# puts "Done Seeding Stylists..."

# puts "Seeding Clients..."

# 20.times do
#     Client.create(
#         name: Faker::Name.name,
#         profile_pic: "https://st2.depositphotos.com/1009634/7235/v/950/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg",
#         hairstyle_pic: "https://media.gettyimages.com/photos/neymar-jr-of-psg-and-his-dreadlocks-following-the-french-cup-match-picture-id1078345582?s=594x594",
#         description: "Looking for a new do!",
#         password: "123"
#         )
# end

# Client.create(
#     name: "Tye Smith",
#     profile_pic: "https://www.giantfreakinrobot.com/wp-content/uploads/2020/07/christucker-900x549.jpg",
#     hairstyle_pic: "https://img.discogs.com/NtHal3AooTUROpgCyLAL7WOu6fc=/600x779/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-230343-1560769871-8054.jpeg.jpg",
#     description: "Let's make it happen!",
#     password: "123"
# )

# puts "Done Seeding Clients..."

# puts "Seeding Appointments..."

# 100.times do
#     Appointment.create(
#         client_id: rand(1..20),
#         stylist_id: rand(1..10),
#         accepted: true,
#         # start_time: Faker::Time.between_dates(from: Date.today - 600, to: Date.today, period: :all),
#         # end_time: start_time+3600.seconds
#         date: Faker::Date.between(from: '2021-06-01', to: '2021-09-25'),
#         rating: rand(1..5),
#         review: "I'm a review! Woohoo!",
#         postcut_pic: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-92995560-1556552760.jpg?crop=1.00xw:0.673xh;0,0.0205xh&resize=640:*"

#         )        
#     # Appointment.update(
#     #         end_time: start_time+3600.seconds
#     #     )
# end


# puts "Done Seeding Appointments..."
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_01_205155) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appointments", force: :cascade do |t|
    t.bigint "client_id", null: false
    t.bigint "stylist_id", null: false
    t.boolean "accepted"
    t.integer "rating"
    t.text "review"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.time "start_time"
    t.time "end_time"
    t.date "date"
    t.string "postcut_pic"
    t.index ["client_id"], name: "index_appointments_on_client_id"
    t.index ["stylist_id"], name: "index_appointments_on_stylist_id"
  end

  create_table "clients", force: :cascade do |t|
    t.string "name"
    t.string "profile_pic"
    t.string "hairstyle_pic"
    t.text "description"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "salons", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.text "description"
    t.time "opening_hours"
    t.time "closing_hours"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "stylists", force: :cascade do |t|
    t.bigint "salon_id", null: false
    t.string "name"
    t.text "description"
    t.date "years_active"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "profile_pic"
    t.index ["salon_id"], name: "index_stylists_on_salon_id"
  end

  add_foreign_key "appointments", "clients"
  add_foreign_key "appointments", "stylists"
  add_foreign_key "stylists", "salons"
end

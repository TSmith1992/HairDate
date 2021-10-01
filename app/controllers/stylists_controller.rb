class StylistsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    # before_action :authorize
    
    def index
        render json: Stylist.all
    end

    def show
        stylist = find_stylist
        render json: stylist
    end

    def create
        stylist = Stylist.create!(stylist_params)
        render json: stylist, status: :created
    end

    def update
        stylist = find_stylist
        stylist.update!(stylist_params)
        render json: stylist, status: :updated
    end

    private

    def find_stylist
        Stylist.find(params[:id])
    end

    def stylist_params
        params.permit(:name, :password, :password_confirmation, :description, :years_active, :profile_pic, :salon_id)
    end

    def render_not_found_response
        render json: {error: "Stylist not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end

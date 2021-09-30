class SalonsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    # before_action :authorize
    
    def index
        render json: Salon.all
    end

    def show
        salon = find_salon
        render json: salon
    end

    private

    def find_salon
        Salon.find(params[:id])
    end

    def render_not_found_response
        render json: {error: "Salon not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end

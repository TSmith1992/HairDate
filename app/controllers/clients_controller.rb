class ClientsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    # before_action :authorize
    
    def index
        render json: Client.all
    end

    def show
        client = find_client
        render json: client
    end

    def create
        client = Client.create!(client_params)
        render json: client, status: :created
    end

    def update
        client = find_client
        client.update!(client_params)
        render json: client, status: :updated
    end

    private

    def find_client
        Client.find(params[:id])
    end

    def client_params
        params.permit(:name, :password, :password_confirmation, :profile_pic, :hairstyle_pic, :description)
    end

    def render_not_found_response
        render json: {error: "Client not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end

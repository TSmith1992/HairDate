class SessionsController < ApplicationController
    def create     
        user = Client.find_by(name: params[:name]) || Stylist.find_by(name: params[:name])
        if user&.authenticate(params[:password])
            session[:id] = Client.id || Stylist.id
            render json: user, status: :created
        else
            render json: {error: "Invalid username or password"}, status: :unauthorized
        end
    end

    def destroy
        session.delete :id
        head :no_content
    end
end
class AppointmentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
    def index
        render json: Appointment.all, each_serializer: AppointmentSerializer
    end

    def show
        appointment = find_appointment
        render json: appointment, serializer: AppointmentSerializer
    end

    def create
        appointment = Appointment.create!(appointment_params)
        render json: appointment, status: :created
    end

    def update
        appointment = find_appointment
        appointment.update!(appointment_params)
        render json: appointment, status: :ok
    end

    def destroy
        appointment = find_appointment
        appointment.destroy!
        head :no_content
    end

    private

    def find_appointment
        Appointment.find(params[:id])
    end

    def appointment_params
        params.permit(:client_id, :stylist_id, :accepted, :rating, :review, :start_time, :end_time, :date, :postcut_pic )
    end

    def render_not_found_response
        render json: {error: "Appointment not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end
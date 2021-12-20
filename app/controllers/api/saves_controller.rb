class Api::SavesController < ApplicationController

    def create
        @save = Save.new(save_params)

        if @save.save
            render "/api/saves/show"
        else
            render json: @save.errors, status: 422
        end
    end

    def show
        @save = Save.find(params[:id])
    end

    def index
        @saves = Save.all
        render "/api/saves/index"
    end

    def destroy
        @save = Save.find(params[:id])

        if @save && @save.destroy
            p "success"
        else
            render json: @save.errors, status: 422
        end
    end

    private

    def save_params
        params.require(:save).permit(:price, :address, :beds, :baths, :status, :zipcode, :realator, :style, :sqft, :description, :lat, :lng, :owner_id)
    end
end 
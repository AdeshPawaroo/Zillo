class Api::ListingsController < ApplicationController

    def create
        @listing = Listing.new(listing_params)

        if @listing.save
            render "/api/listings/show"
        else
            render json: @listing.errors, status: 422
        end
    end

    def show
        @listing = Listing.find(params[:id])
    end

    def index
        @listings = Listing.all
        render "/api/listings/index"
    end

    # def user_listings_index
    #     @user_listings = Listing.select { |listing| listing.owner_id(params[:id]) }
    #     render "/api/listings/index"
    # end

    def destroy
        @listing = Listing.find(params[:id])

        if @listing && @listing.destroy
        end

        render "/api/listings/index"
    end

    private

    def listing_params
        params.require(:listing).permit(:price, :address, :beds, :baths, :status, :zipcode, :realator, :style, :sqft, :description, :lat, :lng, :owner_id, :image)
    end

end
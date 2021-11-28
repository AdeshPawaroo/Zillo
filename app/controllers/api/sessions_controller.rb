class Api::SessionsController < ApplicationController

    # skip_before_action :verify_authenticity_token

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )

        if @user
            login(@user)
            render 'api/users/show'
        else
            render json: 'Invalid email and/or password', status: 401 
        end
    end

    def destroy
        @user = current_user
        if @user
            logout
            render 'api/users/show'
        else
            render json: 'No one is signed in', status: 404
        end
    end
end
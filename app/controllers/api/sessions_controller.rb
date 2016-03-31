class Api::SessionsController < ApplicationController
  def show
    if logged_in?
      render json: current_user
    else
      render json: { message: 'Not logged in' }, status: 401
    end
  end

  def create
    user = User.find_by_credentials(
      params[:username],
      params[:password]
    )
    if user
      sign_in(user)
      render json: user
    else
      flash.now[:errors] = ["Invalid username or password"]
      render :new
    end
  end

  def destroy
    sign_out
    render json: {}
  end
end

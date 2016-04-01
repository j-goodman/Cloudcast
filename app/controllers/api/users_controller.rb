class Api::UsersController < ApplicationController
  def new
    @user = User.new
  end

  def show
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if user
      render json: user
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user
      sign_in(@user)
    else
      flash.now[:errors] = @user.errors.full_messages
      render json: {}
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end

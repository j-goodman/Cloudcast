class Api::UsersController < ApplicationController
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

  def new
    @user = User.new
  end

  def show
    @user = User.find(params[:id])
    if @user
      render :show
    end
  end

	def index
		@users = User.all
	end

  private
  def user_params
    params.require(:user).permit(:username, :password, :image)
  end
end

class Api::LikesController < ApplicationController
  def index
    @likes = Like.all
  end

  def show
    @like = Like.find(params[:id])
  end

  def create
    if current_user
      @like = current_user.likes.new(like_params)
      if @like.save
        render json: {};
      else
        render json: @like.errors.full_messages, status: 422
      end
    end
  end

  private

  def like_params
    params.require(:like).permit(
      :track_id, :user_id
    )
  end
end

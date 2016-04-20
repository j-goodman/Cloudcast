class Api::LikesController < ApplicationController
  def index
    @likes = Like.all
  end

  def show
    @like = Like.find(params[:id])
  end

  private

  def like_params
    params.require(:track).permit(
      :track_id, :user_id
    )
  end
end

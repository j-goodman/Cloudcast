class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.all
  end

  def show
    @comment = Comment.find(params[:id])
  end

  private

  def comment_params
    params.require(:track).permit(
      :track_id, :user_id, :seconds, :body
    )
  end
end

class Api::CommentsController < ApplicationController
  def create
    if current_user
      @comment = current_user.comments.new(comment_params)
      if @comment.save
        render json: {};
      else
        render json: @comment.errors.full_messages, status: 422
      end
    end
  end

  def destroy
    @comment = Track.find(params[:id])
    @comment.destroy
    render :show
  end

  def index
    @comments = Comment.all
  end

  def show
    @comment = Comment.find(params[:id])
  end

  private

  def comment_params
    params.require(:comment).permit(
      :body, :track_id, :user_id, :seconds
    )
  end
end

class Api::TracksController < ApplicationController
  def create
    @track = current_user.tracks.new(track_params)
    if @track.save
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def destroy
    @track = Track.find(params[:id])
    @track.destroy
    render :show
  end

  def index
    @tracks = Track.all
  end

  def show
    @track = Track.find(params[:id])
  end

  private

  def track_params
    params.require(:track).permit(
      :title, :user_id, :description, :image, :audio
    )
  end
end

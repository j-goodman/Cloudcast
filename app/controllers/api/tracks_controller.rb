class Api::TracksController < ApplicationController
  def create
    @track = Track.new(track_params)
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
    :title, :file_url, :user_id, :description, :image_url)
  end
end

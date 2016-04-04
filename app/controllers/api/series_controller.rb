class Api::SeriesController < ApplicationController

  def create
    @series = current_user.series.new(series_params)
    if @series.save
      render :show
    else
      render json: @series.errors.full_messages, status: 422
    end
  end

  def destroy
    @series = Series.find(params[:id])
    @series.destroy
    render :show
  end

  def index
    @series = Series.all
  end

  def show
    @series = Series.find(params[:id])
  end

  private

  def series_params
    params.require(:series).permit(
    :title, :description, :user_id)
  end
end

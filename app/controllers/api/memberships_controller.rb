class Api::MembershipsController < ApplicationController

  def create
    @membership = Membership.new(membership_params)
    if @membership.save
      render :show
    else
      render json: @membership.errors.full_messages, status: 422
    end
  end

  def destroy
    @membership = Membership.find(params[:id])
    @membership.destroy
    render :show
  end

  def index
    @membership = Membership.all
  end

  def show
    @membership = Membership.find(params[:id])
  end

  private

  def membership_params
    params.require(:membership).permit(
    :track_id, :series_id)
  end
end

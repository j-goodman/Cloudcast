Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:new, :create, :edit, :update]

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:new, :show, :create, :destroy]
    resources :tracks, only: [:create, :destroy, :index, :show, :update]
  end
end

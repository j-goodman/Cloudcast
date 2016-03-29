Rails.application.routes.draw do
  resources :users, only: [:new, :create, :edit, :update]
  resource :session, only: [:new, :create, :destroy]
end

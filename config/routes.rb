Rails.application.routes.draw do
  
  resources :appointments, only: [:index, :show, :create, :update, :destroy]
  resources :clients, only: [:index, :show, :create, :update]
  resources :stylists, only: [:index, :show, :create, :update]
  resources :salons, only: [:index, :show]
  post "/login", to: 'sessions#create'
  delete "/logout", to: 'sessions#destroy'
  get "/me", to: 'clients#show_me'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

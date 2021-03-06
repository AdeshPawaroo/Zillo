Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show, :index]
    resources :listings, only: [:create, :show, :index, :destroy]
    resources :saves, only: [:create, :show, :index, :destroy]

    # resources :listings do
    #   resources :users, only: :index
    # end

    resources :users do 
      resources :listings, only: :index
    end
  end

  root 'static_pages#root'
end

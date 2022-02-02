Rails.application.routes.draw do
  get '*page', to: 'static#index', constraints: -> (req) do 
    !req.xhr? && req.format.html?
  end
  
  namespace :api do 
    resources :greetings, only: [:index, :show] do
    end
  end

  root 'static#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

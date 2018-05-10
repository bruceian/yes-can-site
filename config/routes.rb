Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'

  get '/no_entry', to: "home#underage"
  get '/welcome', to: "home#welcome"
  
end

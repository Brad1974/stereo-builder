Rails.application.routes.draw do
  resources :stereos
  resources :components
  root 'application#angular'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

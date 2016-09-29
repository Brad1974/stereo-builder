Rails.application.routes.draw do

  devise_for :users
  resources :stereos, except: [:new, :edit] do
    resources :comments
  end
  get 'components' => 'components#index'
  patch 'components/:id/remove_assoc' => 'components#remove_assoc'
  root 'application#angular'
  resources :users

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

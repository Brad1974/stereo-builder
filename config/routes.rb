Rails.application.routes.draw do
  resources :stereos, except: [:new, :edit]
  get 'components' => 'components#index'
  patch 'components/:id/remove_assoc' => 'components#remove_assoc'
  root 'application#angular'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

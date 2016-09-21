class ChangeColumnInComponents < ActiveRecord::Migration[5.0]
  def change
    change_column :components, :favorite, :integer, default: 0
  end
end

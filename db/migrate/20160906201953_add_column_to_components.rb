class AddColumnToComponents < ActiveRecord::Migration[5.0]
  def change
    add_column :components, :favorite, :integer
  end
end

class CreateStereoComponents < ActiveRecord::Migration[5.0]
  def change
    create_table :stereo_components do |t|
      t.integer :stereo_id
      t.integer :component_id
      t.timestamps
    end
  end
end

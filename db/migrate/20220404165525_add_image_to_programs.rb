class AddImageToPrograms < ActiveRecord::Migration[7.0]
  def change
    add_column :programs, :img_url, :string
  end
end

class ChangeImageUrlToNewFromPrograms < ActiveRecord::Migration[7.0]
  def change
    change_column :programs, :img_url, :jsonb, using: 'to_jsonb(img_url)'
  end
end

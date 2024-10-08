defmodule Backend.Repo.Migrations.CreateArticles do
  use Ecto.Migration

  def change do
    create table(:articles) do
      add :title, :string
      add :digest, :text
      add :type, :string
      add :comments, :map
      add :query_date, :string

      timestamps(type: :utc_datetime)
    end
  end
end

defmodule Backend.Articles.Article do
  use Ecto.Schema
  import Ecto.Changeset

  schema "articles" do
    field :type, :string
    field :title, :string
    field :comments, :map
    field :digest, :string
    field :query_date, :string

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(article, attrs) do
    article
    |> cast(attrs, [:title, :digest, :type, :comments, :query_date])
    |> validate_required([:title, :digest, :type, :query_date])
  end
end

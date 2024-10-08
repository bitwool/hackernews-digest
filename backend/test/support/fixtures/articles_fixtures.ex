defmodule Backend.ArticlesFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Backend.Articles` context.
  """

  @doc """
  Generate a article.
  """
  def article_fixture(attrs \\ %{}) do
    {:ok, article} =
      attrs
      |> Enum.into(%{
        comments: %{},
        digest: "some digest",
        query_date: "some query_date",
        title: "some title",
        type: "some type"
      })
      |> Backend.Articles.create_article()

    article
  end
end

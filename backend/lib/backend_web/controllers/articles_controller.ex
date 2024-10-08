defmodule BackendWeb.ArticlesController do
  use Phoenix.Controller, formats: [:json]
  alias Backend.Articles

  def index(conn, _params) do
    articles = %{articles: Articles.list_articles()}
    render(conn, :index, articles)
  end
end

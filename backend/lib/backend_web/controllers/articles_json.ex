defmodule BackendWeb.ArticlesJSON do
  alias Backend.Articles.Article

  def index(%{articles: articles}) when is_list(articles) do
    %{data: for(article <- articles, do: data(article))}
  end

  defp data(%Article{} = datum) do
    %{
      id: datum.id,
      title: datum.title,
      digest: datum.digest,
      type: datum.type,
      comments: datum.comments,
      query_date: datum.query_date
    }
  end
end

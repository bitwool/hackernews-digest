# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Backend.Repo.insert!(%Backend.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias Backend.Repo
alias Backend.Articles.Article

for _ <- 1..30 do
  year = Enum.random(2000..2023)
  month = Enum.random(1..12) |> Integer.to_string() |> String.pad_leading(2, "0")
  day = Enum.random(1..28) |> Integer.to_string() |> String.pad_leading(2, "0")
  query_date = "#{year}-#{month}-#{day}"

  %Article{
    title: "Sample Title #{:rand.uniform(1000)}",
    digest: "Sample digest content",
    type: Enum.random(["hackernews", "reddit"]),
    comments: %{"comments" => ["Comment 1", "Comment 2", "Comment 3"]},
    query_date: query_date
  }
  |> Repo.insert!()
end

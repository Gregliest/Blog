import ArticleCard from './ArticleCard'

export default function ArticleGallery(props) {
  const list = props.articles.map((article) => {
    return <ArticleCard key={article.title} post={article} />
  })

  return (
    <div className="flex justify-center outline-none">
      <div className="grid w-fit grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">{list}</div>
    </div>
  )
}

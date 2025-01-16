import Card from "./Card"
import Header from "./Header"
const Articles = () => {
  return (
    <>
      <Header />
      <h2 className="ml-32 mb-0.5 underline underline-offset-8 font-bold">Articles</h2>
      <hr className="ml-32 mr-32" />
      <div className="mx-28 flex">
        <Card />
      </div>
    </>
  )
}
export default Articles

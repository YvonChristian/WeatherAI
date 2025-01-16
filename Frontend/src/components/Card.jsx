import { CiHeart } from "react-icons/ci";
import { AiOutlineComment } from "react-icons/ai";
const Card = () => {
  return (
    <div className="card">
      <div className="row flex">
        <div className="img w-[450px] h-[239px] bg-gray-300 ">
          <a href="">
            <img />
          </a>
        </div>
        <div className="content p-5">
          {/* Titre */}
          <h1 className="text-2xl font-bold hover:text-gray-500">
            <a href="/">Titre</a>
          </h1>

          {/* text */}
          <h4 className="text-lg text-gray-500">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</h4>

          {/* metaFooter */}
          <div className="metaFooter w-[300px] my-1 flex">
            {/* Profile author's photo */}
            <span className="meta-footer-thumb w-[50px] h-[50px] bg-gray-300 rounded-full">
              <a href="author.html">
                <img className="author-thumb" src="" alt="" />
              </a>
            </span>
            <span className="author-meta w-[170px] pl-5">
              <span className="post-name"><a href="author.html">Jane</a></span><br />
              <div className="w-52 flex">
                <span className="post-date">22 July 2017</span>
                <span className="dot"></span>
                <span className="post-read ml-1">6 min</span>
              </div>
            </span>
            <span className="flex pt-2">
              <CiHeart
                size={24}
                className="my-1 mx-2"
              />
              <AiOutlineComment
                size={24}
                className="my-1 mx-2"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card

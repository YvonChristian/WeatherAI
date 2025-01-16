import { NavLink } from "react-router-dom"
import SearchBar from "./SearchBar"
import { useState } from "react"
import { GrMapLocation, GrArticle, GrUser } from "react-icons/gr";

const NavBar = () => {

  //state for search
  const [searchQuery, setSearchQuery] = useState('')

  //onSearch function
  const handleSearchArticles = () => {
    console.log('handleSearchArticles')
  }

  //clearSearch
  const onClearSearch = () => {
    console.log('handleClearSearch')
    setSearchQuery('')
  }


  return (
    <div className="w-[100%] h-14 p-5 bg-transparent z-10 relative justify-end border-[1px] border-b-gray-300 flex items-center">
      <div className="mr-16 text-black font-bold">
        <h2>MétéoMonde.</h2>
      </div>
      <ul className="flex mr-20">
        <li className="items-center mt-[5px]">
          <NavLink className={`flex text-slate-500 p-[5px] hover:text-black ${({ isActive }) => isActive ? 'active' : ''}`}
            to="/">
            <GrArticle
              size={22}
              className="mx-1"
            />
            Articles
          </NavLink>
        </li>
        <li className="items-center mt-[5px]">
          <NavLink className={`flex text-slate-500 p-[5px] hover:text-black ${({ isActive }) => isActive ? 'active' : ''}`}
            to="/Weather">
            <GrMapLocation
              size={22}
              className="mx-1"
            />
            Weather Map
          </NavLink>
        </li>
        <li className="items-center mt-[5px]">
          <NavLink className={`flex text-slate-500 p-[5px] hover:text-black ${({ isActive }) => isActive ? 'active' : ''}`}
            to="/Authors">
            <GrUser
              size={22}
              className="mx-1"
            />
            Authors
          </NavLink>
        </li>
        <SearchBar
          value={searchQuery}
          onChange={({ target }) => { setSearchQuery(target.value) }}
          onSearchArticles={handleSearchArticles}
          onClearSearch={onClearSearch}
        />
      </ul>
    </div >
  )
}

export default NavBar

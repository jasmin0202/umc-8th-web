import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="flex justify-between items-center w-100 text-gray-400 p-4">
        <Link to={'/'}>홈</Link>
        <Link to='/popular'>인기 영화</Link>
        <Link to='/nowplaying'>상영 중</Link>
        <Link to='/top-rated'>평정 높은</Link>
        <Link to='/upcoming'>개봉 예정</Link>
        </nav>
    </div>
  )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { accessToken } = useAuth();
  return (
    <nav className = "bg-pink-400 dark:bg-gray-900 shadow-md">
        <div className = "flex items-center justify-between p-4">
            <Link to="/" className="font-bold text-xl text-gray-800 dark:text-white">
                듀듀듀뱌뱌뱌
            </Link>
            <div className = 'space-x-6'>
                {!accessToken && (
                    <>
                <Link to="/login" className="text-gray-300 hover:text-blue-500">
                로그인
                </Link>

                <Link to="/signup" className="text-gray-300 hover:text-blue-500">
                회원가입
                </Link>
                </>
                ) }
                {accessToken && (
                    <>
                <Link to="/mypage" className="text-gray-300 hover:text-blue-500">
                마이페이지
                </Link>

                <Link to="/search" className="text-gray-300 hover:text-blue-500">
                검색
                </Link>
                </>
                )}
            </div>

        </div>
    </nav>
  )
}

export default Navbar

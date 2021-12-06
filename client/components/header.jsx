import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ userName, repositoryName }) => (
  <div className='flex flex-col items-center text-white bg-indigo-800'>
    <div className='font-bold my-3'>
        <div id="user-name">{userName}</div>
        <div id="repository-name">{repositoryName}</div>
    </div>

    <div className='flex justify-between w-full px-4'>
        <Link id="go-back" className='border rounded m-4 px-2 bg-red-700' to="/">Back</Link>
        <Link id="go-repository-list" className='border rounded m-4 px-2 bg-red-700' to={`/${userName}`}>Repository List</Link>
    </div>

  </div>
)

Header.propTypes = {}

export default React.memo(Header)
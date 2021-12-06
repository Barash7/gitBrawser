import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import Head from './head'
import Header from './header'

const Repo = () => {
    const { userName } = useParams()
    const [repos, setRepos] = useState([])
    const url = `https://api.github.com/users/${userName}/repos`
    useEffect(() => {
        fetch(url)
          .then((r) => r.json())
          .then((arr) => {
              setRepos(arr)
          })
          .catch((err) => console.log(err))
    },[])
    return (
    <div>
        <Head title="Repositories" />
        <Header { ...{ userName }} />
        <div className='flex flex-col mx-4 bg-purple-600 text-white font-bold rounded-lg border shadow-lg p-10'>
        {repos.map((repoObj) => {
        return <Link to={`/${userName}/${repoObj.name}`} key={repoObj.id}>{repoObj.name}</Link>
    })}
        </div>
    </div>
    )
}

Repo.propTypes = {}

export default React.memo(Repo)
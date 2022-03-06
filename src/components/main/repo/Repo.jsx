import React from 'react'
import { NavLink } from 'react-router-dom'
import './repo.scss'
const Repo = ({repo}) => {
  return (
    <div className='repo'>
        <div className="repo-header">
            <NavLink to={`/card/${repo.owner.login}/${repo.name}`} className="repo-header-name">{repo.name}</NavLink>
            <div className="repo-header-stars">stars:  {repo.stargazers_count}</div>
        </div>
        <div className="repo-last-commit">last update at:  {repo.updated_at}</div>
         <div className="repo-link-text">Ссылка на репозиторий:<a href={repo.html_url} className='repo-link'>{repo.html_url}</a></div>
    </div>
  )
}

export default Repo
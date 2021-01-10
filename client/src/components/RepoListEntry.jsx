import React from 'react';

const RepoListEntry = ({repo}) => {
  const { name, html_url, watchers, id, owner, updated_at } = repo;
  const date = new Date(updated_at);

  return (
    <div>
      <li className="repo">
        <div>
          <span><a href={html_url}>{name}</a>{` by ${owner}`}</span><br />
          <span>{`${watchers} watchers`}</span><br />
          <span>{`last updated: ${date}`}</span>
        </div>
      </li>
    </div>
  )
}

export default RepoListEntry;

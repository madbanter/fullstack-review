import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';

const RepoList = ({repos}) => (
  <div>
    <h4> Repo List Component </h4>
    There are {repos.length} repos.
    <div>
      <ul className="repolist">
        {repos.map(repo =>
          <RepoListEntry repo={repo}/>
        )}
      </ul>
    </div>
  </div>
)

export default RepoList;
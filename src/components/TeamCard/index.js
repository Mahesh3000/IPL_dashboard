// Write your code here

import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {MatchData} = props
  const {id, name, teamImageUrl} = MatchData

  return (
    <Link to={`/team-matches/${id}`} className="blog-item-link">
      <div>
        <div className="item-container">
          <img src={teamImageUrl} className="team-img" alt={name} />
          <p className="team-text">{name}</p>
        </div>
      </div>
    </Link>
  )
}

export default TeamCard

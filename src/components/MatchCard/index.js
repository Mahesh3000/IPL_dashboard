import {Link} from 'react-router-dom'
import './index.css'

const MatchCard = props => {
  const {MatchData} = props
  const {id, name, teamImageUrl} = MatchData

  return (
    <Link to={`/team-matches/${id}`} className="blog-item-link">
      <div>
        <div className="item-containe">
          <img src={teamImageUrl} className="team-img" alt="team" />
          <div className="team-text">{name}</div>
        </div>
      </div>
    </Link>
  )
}

export default MatchCard

// Write your code here

// import {Link} from 'react-router-dom'
import './index.css'

const LatestMatch = ({blogData, ...props}) => {
  console.log('MatchData', blogData?.recent_matches)

  //   const {id, name, teamImageUrl} = MatchData

  return (
    <div>
      <p className="Latest-text">Latest Matches</p>

      <div>
        <div className="item-containr">
          <div className="contr-2">
            <div>
              <p className="competing-team-text">
                {blogData?.latest_match_details?.competing_team}
              </p>
              <p className="competing-team-text">
                {blogData?.latest_match_details?.date}
              </p>
              <p className="competing-team-text">
                {blogData?.latest_match_details?.venue}
              </p>
              <p className="competing-team-text">
                {blogData?.latest_match_details?.result}
              </p>
            </div>
            <div className="okl">
              <img
                className="team-img"
                src={blogData?.latest_match_details?.competing_team_logo}
                alt={`latest match ${blogData?.latest_match_details?.competing_team}`}
              />
            </div>
          </div>
          <br />
          <div>
            <p className="competing-team-text-t">First Innings</p>
            <p className="competing-team-text">
              {blogData?.latest_match_details?.first_innings}
            </p>
            <p className="competing-team-text-t">Second Inngings</p>
            <p className="competing-team-text">
              {blogData?.latest_match_details?.second_innings}
            </p>
            <p className="competing-team-text-t">Man Of The Match</p>
            <p className="competing-team-text">
              {blogData?.latest_match_details?.man_of_the_match}
            </p>
            <p className="competing-team-text-t">Umpires</p>
            <p className="competing-team-text">
              {blogData?.latest_match_details?.umpires}
            </p>
          </div>
          {/* <img src={teamImageUrl} className="team-img" alt="team-img" /> */}
          {/* <div className="team-text">{name}</div> */}
        </div>
        <div>
          <div>
            <div className="item-contw">
              {blogData?.recent_matches?.map(item => (
                <div className="item-continer">
                  <img
                    src={item?.competing_team_logo}
                    className="team-imag"
                    alt={`competing team ${item?.competing_team}`}
                  />
                  <p className="competing-team-text">{item?.competing_team}</p>
                  <p className="competing-team-text">{item?.result}</p>
                  <p
                    className={
                      item?.match_status === 'Lost'
                        ? 'status-lost'
                        : 'status-won'
                    }
                  >
                    {item?.match_status}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch

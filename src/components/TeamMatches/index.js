// // Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'
import LatestMatch from '../LatestMatch'

class TeamMatches extends Component {
  state = {isLoading: true, blogData: {}}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    this.setState({blogData: data, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {blogData, isLoading} = this.state

    return (
      <div className="blog-info">
        {isLoading ? (
          <Loader
            data-testid="loader"
            type="TailSpin"
            color="#00BFFF"
            height={50}
            width={50}
          />
        ) : (
          <div className="cont-2">
            <img
              className="team-pic"
              src={blogData?.team_banner_url}
              alt="team banner"
            />
            <LatestMatch blogData={blogData} />
          </div>
        )}
      </div>
    )
  }

  render() {
    return <div className="blog-container">{this.renderBlogItemDetails()}</div>
  }
}

export default TeamMatches

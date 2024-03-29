// import {Link} from 'react-router-dom'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'
import TeamCard from '../TeamCard'

// const Home = props => {
class Home extends Component {
  state = {isLoading: true, blogsData: []}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')

    const data = await response.json()
    const updatedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({blogsData: updatedData, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {blogsData, isLoading} = this.state

    return (
      <div className="appbody" data-testid="loader">
        <div className="cont1">
          <div className="llo">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipllogo"
            />
            <h1 className="main-text">IPL Dashboard</h1>
          </div>
          <div className="cont-2">
            <div className="item-cont">
              {isLoading ? (
                <div>
                  <Loader
                    type="TailSpin"
                    color="#00BFFF"
                    height={50}
                    width={50}
                  />
                </div>
              ) : (
                blogsData?.map(item => (
                  <TeamCard MatchData={item} key={item?.id} />
                ))
              )}
            </div>
          </div>
        </div>
        <ul>
          <li>khd</li>
          <li>khd</li>
        </ul>
      </div>
      //   <div className="blog-info">
      //     <h2 className="blog-details-title">{title}</h2>

      //     <div className="author-details">
      //       <img className="author-pic" src={avatarUrl} alt={author} />
      //       <p className="details-author-name">{author}</p>
      //     </div>

      //     <img className="blog-image" src={imageUrl} alt={title} />
      //     <p className="blog-content">{content}</p>
      //   </div>
    )
  }

  render() {
    return <div className="blog-container">{this.renderBlogItemDetails()}</div>
  }
}
//   render() {
//     return (
//   <div className="appbody">
//     <div className="cont1">
//       <img
//         src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
//         alt="ipl logo"
//         className="ipllogo"
//       />
//       <div className="main-text">IPL Dashboard</div>
//       <div>

//       </div>
//     </div>
//   </div>
//     )
//   }

export default Home

//  const {blogData} = props
//   const {id, imageUrl, topic, title, avatarUrl, author} = blogData

// <Link to={`/blogs/${id}`} className="blog-item-link">
//   <div className="item-container">
//     <img className="item-image" src={imageUrl} alt={`item${id}`} />

//     <div className="item-info">
//       <p className="item-topic">{topic}</p>

//       <p className="item-title">{title}</p>
//       <div className="author-info">
//         <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
//         <p className="author-name">{author}</p>
//       </div>
//     </div>
//   </div>
// </Link>

// import {Component} from 'react'

// import './index.css'

// class BlogItemDetails extends Component {
//   state = {blogData: {}}

//   componentDidMount() {
//     this.getBlogItemData()
//   }

//   getBlogItemData = async () => {
//     const {match} = this.props
//     const {params} = match
//     const {id} = params

//     const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
//     const data = await response.json()

//     const updatedData = {
//       title: data.title,
//       imageUrl: data.image_url,
//       content: data.content,
//       avatarUrl: data.avatar_url,
//       author: data.author,
//     }
//     this.setState({blogData: updatedData})
//   }

//   renderBlogItemDetails = () => {
//     const {blogData} = this.state

//     const {title, imageUrl, content, avatarUrl, author} = blogData
//     return (
//       <div className="blog-info">
//         <h2 className="blog-details-title">{title}</h2>

//         <div className="author-details">
//           <img className="author-pic" src={avatarUrl} alt={author} />
//           <p className="details-author-name">{author}</p>
//         </div>

//         <img className="blog-image" src={imageUrl} alt={title} />
//         <p className="blog-content">{content}</p>
//       </div>
//     )
//   }

//   render() {
//     return <div className="blog-container">{this.renderBlogItemDetails()}</div>
//   }
// }

// export default BlogItemDetails

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Blog extends Component {
    render() {
    const {image, BlogTitle, BlogText } = this.props
    return (
 <div className="col-md-4">
 <div className="card mb-4 shadow-sm">
   <Img className="bd-placeholder-img card-img-top" width="100%" height="225" src={image} alt='' preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></Img>
   <div className="card-body">
      <b>{BlogTitle}</b>
     <p className="card-text">{BlogText}</p>
     <div className="d-flex justify-content-between align-items-center">
       <div className="btn-group">
         <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
         <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
       </div>
       <small className="text-muted">9 mins</small>
     </div>
   </div>
 </div>
</div>
)}}

Blog.propTypes = {
    image: PropTypes,
    BlogTitle: PropTypes.string.isRequired,
    BlogText: PropTypes.string.isRequired

  }

Blog.defaultProps = {
    image: '',
    BlogTitle: '',
    BlogText: ''
  }

export default Blog

import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    /**
     * Deserializing to get the values from props passed by News components
     */
    let {title,description,imageURL,newsURL} = this.props;
    return (
      <>
      {/* Here we will set the vaules of the card attribures using the props passed */}
      <div className="container my-3">
        <div className="card">
          <img src={imageURL?imageURL:"https://cdn.i-scmp.com/sites/default/files/styles/og_image_scmp_generic/public/d8/images/canvas/2023/03/27/abce0b1c-a603-4d45-a3d4-cf307bc1c22f_aff784aa.jpg?itok=vr-YUvnG&v=1679893790"} className="card-img-top" alt="..."/>
          <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={newsURL} target="_blank" className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default NewsItem

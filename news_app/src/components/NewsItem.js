import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description} = this.props;
    return (
      <>
        <div className="card" style={{width: "18rem"}}>
          <img src="https://s.abcnews.com/images/Politics/Mike-Gallagher-2-gty-gmh-230325-_1679766000667_hpMain_16x9_992.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
      </div>
      </>
    )
  }
}

export default NewsItem

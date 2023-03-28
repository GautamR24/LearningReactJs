import React, { Component } from 'react'
import NewsItem from './NewsItem'
const agentUrl = process.env.REACT_APP_API_NEWS_API;

export class News extends Component {
  
  constructor(){
    //this runs first alway then render then component_did_mount
    super();
    this.state = {
      article: [],
      loading:false
    }
  }

  async componentDidMount(){
    //this runs after render always
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${agentUrl}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({article:parseData.articles});
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsPoint top headlines</h2>
        <div className="row">
        {this.state.article.map((element)=>{
          return <div key={element.url} className="col-md-4">
                   <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageURL={element.urlToImage} newsURL={element.url}/>
                 </div>
        })}
        </div>
      </div>
    )
  }
}

export default News

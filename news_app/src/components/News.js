import React, { Component } from 'react'
import NewsItem from './NewsItem'
const agentUrl = process.env.REACT_APP_API_NEWS_API;

export class News extends Component {
  
    /**
     * The constructor will run only one time when the app starts
     * This constructor will set the state of variables
     */
  constructor(){
    super();
    this.state = {
      article: [],
      loading:false
    }
  }

  /**
   * componenetDidMount runs after render
   * Using this we are fetching the news from the api
   * The article variable present in state will store the article array received from API
   */
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
        /**
         * For each news element present in the response from API we will
         * call NewsItem component to set the values of each attribute and then it will be displayed on site.
         * We are using (array.map) to work on each element of the article array
         */
      <div className='container my-3'>
        <h2>NewsPoint top headlines</h2>
        <div className="row">
        {this.state.article.map((element)=>{
          return <div key={element.url} className="col-md-4">
                   <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageURL={element.urlToImage} newsURL={element.url}/>
                 </div>
        })}
        </div>
        <div className="container d-flex justify-content-between my-3">
        <button type="button" className="btn btn-dark">Previous</button>
        <button type="button" className="btn btn-dark">Next</button>
        </div>
      </div>
    )
  }
}

export default News

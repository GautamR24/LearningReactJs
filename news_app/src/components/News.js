import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


const agentUrl = process.env.REACT_APP_API_NEWS_API;

export class News extends Component {

  static defaultProps = {
    country : 'in',
    pageSize : 5,
    category: 'general'
  }
  
  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string,
  }
    /**
     * The constructor will run only one time when the app starts
     * This constructor will set the state of variables
     */
  constructor(){
    super();
    this.state = {
      article: [],
      loading:false,
      page:1
    }
  }

  /**
   * componenetDidMount runs after render
   * Using this we are fetching the news from the api
   * The article variable present in state will store the article array received from API
   */
  async componentDidMount(){
    //this runs after render always
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${agentUrl}&pageSize=${this.props.pageSize}`;
     /**
     * setting the loading state "true", during this time the loader will be visible
     */
    this.setState({
      loading:true
    })
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      loading:false,
      article:parseData.articles,
      totalResults:parseData.totalResults
    });
  }

  handleNextClick=async()=>{
    console.log("next");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${agentUrl}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
     /**
     * setting the loading state "true", during this time the loader will be visible
     */
    this.setState({
      loading:true
    })
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      loading:false,
      article:parseData.articles,
      page: this.state.page + 1
    });
  }

  handlePrevClick=async()=>{
    console.log("prev");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${agentUrl}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    /**
     * setting the loading state "true", during this time the loader will be visible
     */
    this.setState({
      loading:true
    })
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      loading:false,
      article:parseData.articles,
      page: this.state.page - 1
    });
  }
  render() {
    return (
        /**
         * For each news element present in the response from API we will
         * call NewsItem component to set the values of each attribute and then it will be displayed on site.
         * We are using (array.map) to work on each element of the article array
         */
      <div className='container my-3'>
        <h1 className="text-center" style={{margin : "35px 0px"}}>NewsPoint top headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {/* this logic will not show the news until loading state's is false */}
        {!this.state.loading && this.state.article.map((element)=>{
          return <div key={element.url} className="col-md-4">
                   <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageURL={element.urlToImage} newsURL={element.url}/>
                 </div>
        })}
        </div>
        {!this.state.loading && <div className="container d-flex justify-content-between my-3">
          {/* the previous button and next button will be disabled based on the conditions */}
        <button disabled={this.state.page <=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&#8701; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &#8702;</button>
        </div>}
      </div>
    )
  }
}

export default News

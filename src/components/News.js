
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'genral'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize:PropTypes.number,
    category: PropTypes.string
  }
//   articles= [ 
// {
//   "source": {
//     "id": "rbc",
//     "name": "RBC"
//   },
//   "author": "RBC",
//   "title": "Старший сын Трампа получил конверт с белым порошком",
//   "description": "Старший сын бывшего президента США Дональд Трамп-младший получил и вскрыл конверт, содержащий неопознанный белый порошок. Об этом пишет издание ABC News со ссылкой на источники. Результаты ...",
//   "url": "https://www.rbc.ru/rbcfreenews/65dd54ed9a79475a48ef2b5c?from=from_main_7",
//   "urlToImage": "https://s0.rbk.ru/v6_top_pics/media/img/7/15/347090062943157.jpg",
//   "publishedAt": "2024-02-27T03:58:13Z",
//   "content": ""
// },
// {
//   "source": {
//     "id": "msnbc",
//     "name": "MSNBC"
//   },
//   "author": "Max Burns",
//   "title": "Why deepfakes like the Biden robocall are a threat to democracy",
//   "description": "AI deepfakes like the Biden robocall that duped voters in New Hampshire undermine trust in government and news institutions, even if voters don’t believe them.",
//   "url": "https://www.msnbc.com/opinion/msnbc-opinion/fake-biden-robocall-ai-elections-rcna140570",
//   "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-02/240226-joe-biden-ew-458p-1af0af.jpg",
//   "publishedAt": "2024-02-26T23:39:16Z",
//   "content": "Last month prospective voters across New Hampshire were confronted with a fake Joe Biden robocall urging them not to vote in the states presidential primary. The call led to renewed speculation that … [+5546 chars]"
// },
// {
//   "source": {
//     "id": "cbs-news",
//     "name": "CBS News"
//   },
//   "author": "CBS News",
//   "title": "2024 presidential race heads to Michigan: What to know",
//   "description": "The 2024 presidential race is now heading to Michigan, where both Democrat and Republican voters will vote in their party's primaries Tuesday. CBS News senior White House and political correspondent Ed O'Keefe has the latest from the battleground state.",
//   "url": "https://www.cbsnews.com/video/2024-presidential-race-heads-to-michigan-what-to-know/",
//   "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2024/02/27/de69ce70-8dc5-47e4-9933-2e1d9403eee1/thumbnail/1200x630/9d6897eed75b808377b09aea2042db65/cbsn-fusion-2024-presidential-race-heads-to-michigan-what-to-know-thumbnail.jpg?v=873773698949ef4145348bb09cabd43d",
//   "publishedAt": "2024-02-27T01:26:00+00:00",
//   "content": "Watch CBS News\r\nCopyright ©2024 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On"
// },
// {
//   "source": {
//     "id": "fox-news",
//     "name": "Fox News"
//   },
//   "author": "Alexander Hall",
//   "title": "Wendy's to roll out Uber-style surge-pricing, with menu prices fluctuating based on demand",
//   "description": "A spokesperson from Wendy's told Fox News Digital how the fast food chain will experiment with new features such as dynamic pricing on a digital menu.",
//   "url": "https://www.foxbusiness.com/media/wendys-roll-uber-style-surge-pricing-menu-prices-fluctuating-based-demand",
//   "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/12/0/0/wendys.jpg?ve=1&tl=1",
//   "publishedAt": "2024-02-27T01:00:06Z",
//   "content": "Wendy's is expected to roll out a dynamic pricing model similar to Uber's surge-pricing as soon as next year.\r\n\"Beginning as early as 2025, we will begin testing a variety of enhanced features on the… [+3227 chars]"
// },
// {
//   "source": {
//     "id": "cbs-news",
//     "name": "CBS News"
//   },
//   "author": "CBS News",
//   "title": "Supreme Court appears divided over social media cases",
//   "description": "The Supreme Court heard two cases Monday that could change how Americans interact with social media. CBS News chief legal correspondent Jan Crawford breaks down the oral arguments.",
//   "url": "https://www.cbsnews.com/video/supreme-court-appears-divided-over-social-media-cases/",
//   "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/02/27/5707b08f-e002-455d-b423-f3b5cf5c2ad1/thumbnail/1200x630/09b272b2d0d32460458a079d3671ece4/scotus.jpg?v=873773698949ef4145348bb09cabd43d",
//   "publishedAt": "2024-02-27T01:36:00+00:00",
//   "content": "Watch CBS News\r\nCopyright ©2024 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On"
// },
// {
//   "source": {
//     "id": "cbs-news",
//     "name": "CBS News"
//   },
//   "author": "CBS News",
//   "title": "Hungary clears way for Sweden to join NATO",
//   "description": "Hungary's parliament voted Monday to ratify Sweden's bid to join NATO, clearing the way for the Nordic country to become the 32nd member of the military alliance. Charles Kupchan, senior fellow with the Council on Foreign Relations, joins CBS News to examine …",
//   "url": "https://www.cbsnews.com/video/hungary-clears-way-for-sweden-to-join-nato/",
//   "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/02/27/35e38a6c-ff56-44cb-9519-ba830b325ccf/thumbnail/1200x630/36e14d23c59ca75870615fc19b6d2498/cbsn-fusion-hungary-clears-way-for-sweden-to-join-nato-thumbnail.jpg?v=873773698949ef4145348bb09cabd43d",
//   "publishedAt": "2024-02-27T01:36:00+00:00",
//   "content": "Watch CBS News\r\nCopyright ©2024 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On"
// }
//   ]
  constructor(){
    super();
    console.log("Hello I am a constructor component");
    this.state={
      // articles: this.articles,
      articles: [],
      loading: false,
      page:1
    }
  }

  async upateNews(){
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b7a102acf4f14a629481d22445df01b3&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data=await fetch(url);
    let parsedData= await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles, 
      totalResults:parsedData.totalResults,
      loading: false})
  }

  async componentDidMount(){

    this.upateNews();
  }  //will run after render() funtion. first constructor then componentDidMount and then render.

   handleNextClick=async()=>{
  //   if(!(this.state.page+1 > Math.ceil(this.state.totalResults/20))){


  //     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b7a102acf4f14a629481d22445df01b3&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  //     this.setState({loading: true});
  //     let data=await fetch(url);
  //     let parsedData= await data.json()
  //     this.setState({
  //       page:this.state.page+1,
  //       articles: parsedData.articles,
  //       loading: false
  //   })
  this.setState({page: this.state.page +1 })
  this.upateNews();
   }
  // }
    handlePreviuosClick=async()=>{
  //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b7a102acf4f14a629481d22445df01b3&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  //   this.setState({loading: true})
  //   let data=await fetch(url);
  //   let parsedData= await data.json()
  //   this.setState({
  //     page:this.state.page-1,
  //     articles: parsedData.articles,
  //     loading: false
  //   })
  this.setState({page: this.state.page -1 })
  this.upateNews();
   }


  render() {
    return (
      <div className="container my-3">
        
        <h1 className="text-center" style={{margin:'35px 0px'}}>NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
          <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
      </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" className="btn btn-dark" onClick={this.handlePreviuosClick} disabled={this.state.page<=1}>&larr; Previous</button>
        <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalResults/20)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
        {/* <p>Current Page: {this.state.page}</p> */}
      </div>
    )
  }
}

export default News
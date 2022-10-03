import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  
  const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
  } 

  const updateNews = async ()=> {
      props.setProgress(10);
      const url = `https://newsdata.io/api/1/news?apikey=${props.apiKey}&category=${props.category}&language=en&country=${props.country}&page=${page}`; 
      setLoading(true)
      let data = await fetch(url);
      props.setProgress(30);
      let parsedData = await data.json()
      props.setProgress(70);
      setResults(parsedData.results)
      setTotalResults(parsedData.totalResults)
      setLoading(false)
      props.setProgress(100);
  }

  useEffect(() => {
      document.title = `${capitalizeFirstLetter(props.category)} - RacoonExpress`;
      updateNews(); 
      // eslint-disable-next-line
  }, [])


  const fetchMoreData = async () => {   
      const url = `https://newsdata.io/api/1/news?apikey=${props.apiKey}&category=${props.category}&language=en&country=${props.country}&page=${page+1}`;
      setPage(page+1) 
      let data = await fetch(url);
      let parsedData = await data.json()
      setResults(results.concat(parsedData.results))
      setTotalResults(parsedData.totalResults)
    };

      return (
          <>
              <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>RacoonExpress - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
              {loading && <Spinner />}
              <InfiniteScroll
                  dataLength={results.length}
                  next={fetchMoreData}
                  hasMore={results.length !== totalResults}
                  loader={<Spinner/>}
              > 
                  <div className="container">
                       
                  <div className="row">
                      {results.map((element) => {
                          return <div className="col-md-4" key={element.url}>
                              <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.image_url} newsUrl={element.link} creator={element.creator} date={element.pubDate} source={element.source_id} />
                          </div>
                      })}
                  </div>
                  </div> 
              </InfiniteScroll>
          </>
      )
  
}


News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'world',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News
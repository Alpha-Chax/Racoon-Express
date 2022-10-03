import React from 'react'

const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, creator, date, source } = props;
        return (
            <div className="my-3">
                <div className="card">
                    <img src={!imageUrl ? "https://images.unsplash.com/photo-1478940020726-e9e191651f1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}</p>
                        <span className="badge text-bg-dark">{source}</span>
                        <p className="card-text"><small className="text-muted">By {!creator ? "Unknown" : creator} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
     
}

export default NewsItem
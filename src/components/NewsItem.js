import React from 'react'

const NewsItem = (props) => {

  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className='my-3'>
      <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>
          {source}
          <span className="visually-hidden">unread messages</span>
        </span>
        <img src={imageUrl ? imageUrl : "https://images.hindustantimes.com/img/2022/01/29/1600x900/us_f18_fighter_jet_1643435435582_1643435435857.jpeg"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
          <p className="card-text my-3"><small className="text-muted">By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
        </div>
      </div>
    </div>
  )

}

export default NewsItem

import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, url, newsUrl, author, date, source } = this.props;
        return (
            <div className="my-3">

                <div className="card">
                    <div style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        position: "absolute",
                        right: "0px",
                        top: "-12px"
                    }}>
                        <span className=" badge rounded-pill bg-danger" style={{}}>
                            {source}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </div>
                    <img src={url ? url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFffq6KeT0KXrvdKeTlSxrQnvW16iuN8tg2Q&usqp=CAU"} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <footer className="blockquote-footer my-1">Published on {new Date(date).toGMTString()} <br /> <cite >{author ? author : "UNKNOWN"} </cite></footer>
                        <a rel="noreferrer" href={newsUrl} target="blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem

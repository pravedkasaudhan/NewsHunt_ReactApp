import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let {title,description,url,newsUrl}=this.props;
        return (
            <div className="my-3">
                <div className="card" style={{width: "18rem"}}>
                    <img src={url?url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFffq6KeT0KXrvdKeTlSxrQnvW16iuN8tg2Q&usqp=CAU"} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a rel="noreferrer" href={newsUrl} target="blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem

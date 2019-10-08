import React, { Component } from 'react'

export class Book extends Component {
    
    render() {
        const {id,title, author, genre, yearofpublication}=this.props.book
        return (
            <div>
                <h4>Book: {title}</h4>
                <p>Author:{author}</p>
                <p>Genre: {genre}</p>
                <p>Year of Publication: {yearofpublication}</p>
            </div>
        )
    }
}

export default Book

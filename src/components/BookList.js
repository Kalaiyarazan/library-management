import React, { Component, Fragment } from 'react'
import Book from './Book'
import {Container, Row, Col} from 'reactstrap'
import { BookConsumer } from './Context'

class BookList extends Component {
    state={
        search:""
    }

    onSearch=(e)=>{
        this.setState({search:e.target.value})
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <br/>
                <Row>
                 <Col sm="12" md={{ size: 6, offset: 3 }} style={{textAlign:"center", fontSize:"20px"}}>
                            <h3>Search Books</h3>
                            <input type="text" onChange={this.onSearch}/>
                 </Col>
                </Row>
                <BookConsumer>
                    {(value=>{  
                        
                        let filteredBooks=value.books.filter(book=>{
                             return book.id==this.state.search || book.isAvailable==this.state.search
                        })
                        console.log("From BookList Context:",{filteredBooks})
                        console.log(filteredBooks.length)
                        filteredBooks.length?
                        filteredBooks.map(book=>{
                            return <Book key={book.id} book={book}/>
                        })
                        :
                        value.books.map(book=>{
                            return <Book key={book.id} book={book}/>
                        })                  
                        }
                        )}
                </BookConsumer>
                </Container>
            </Fragment>
        )
    }
}

export default BookList

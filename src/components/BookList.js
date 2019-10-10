import React, { Component, Fragment } from 'react'
import Book from './Book'
import {Container, Row, Col} from 'reactstrap'
import { BookConsumer } from './Context'

class BookList extends Component {
    state={
        searchedBooks:[]
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <br/>
                <Row>
                 <Col sm="12" md={{ size: 6, offset: 3 }} style={{textAlign:"center", fontSize:"20px"}}>
                 <BookConsumer>
                    {(value=>{
                        return <>
                            <h3>Search Books</h3>
                            <input type="text" onChange={value.onSearch}/>
                            </>
                    })}
                    </BookConsumer>
                 </Col>
                </Row>
                <BookConsumer>
                    {(value=>{  
                        console.log("From BookList Context:",{value})
                        return value.books.map(book=>{
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

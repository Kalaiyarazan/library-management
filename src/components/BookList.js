import React, { Component, Fragment } from 'react'
import Book from './Book'
import {Container, Row, Col} from 'reactstrap'
import { BookConsumer } from './Context'

class BookList extends Component {
    state={
        Books:[]
    }
    render() {
        return (
            <Fragment>
                <Container>
                <Row>
                 <Col sm="12" md={{ size: 6, offset: 3 }} style={{textAlign:"center", fontSize:"50px"}}>Search All Books</Col>
                </Row>
                <BookConsumer>
                    {(value=>{
                        console.log(value)
                        return value.map(book=>{
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

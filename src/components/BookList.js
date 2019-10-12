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
        const {search}=this.state
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
                                          return book.title.toLowerCase().includes(search.toLowerCase()) || 
                                                  book.author.toLowerCase().includes(search.toLowerCase()) || 
                                                  book.genre.toLowerCase().includes(search.toLowerCase()) ||
                                                  book.yearofpublication.toString().includes(search.toString()) ||    
                                                  !search
                        })
                        return filteredBooks.map(book=>{
                            return <Book key={book.id} book={book} isInCart={value.isInCart} addtoCart={value.addtoCart}/>
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

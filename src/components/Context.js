import React, { Component } from 'react'


const BookContext = React.createContext()


class BookProvider extends Component {
state = {
            books:[],
            isLoaded:false
        }

    componentDidMount(){
        fetch("https://my.api.mockaroo.com/books.json?key=edc7ab90")
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                books:data,
                isLoaded:true,
                error:null
            })
        },
        (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
          )
    }
    
    render() {
        const{books}=this.state
        // console.log(books)
        return (
            <BookContext.Provider value={books}>
                {this.props.children}
            </BookContext.Provider>
        )
    }
}

const BookConsumer = BookContext.Consumer;

export {BookProvider,BookConsumer}

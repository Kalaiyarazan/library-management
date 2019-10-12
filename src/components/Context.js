import React, { Component } from 'react'


const BookContext = React.createContext()


class BookProvider extends Component {
state = {
            books:[],
            isLoaded:false,
            cartItems:[],
            isInCart:false
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

    onAddCart=(book)=>{
        this.setState(prevState=>({cartItems:[...this.state.cartItems,book], isInCart: !prevState.isInCart}));
         
    }


    onRemoveCart=(id)=>{
        console.log("Removed", id)
        const cartItems=this.state.cartItems.filter(cartItem=>cartItem.id !==id);
        this.setState({cartItems:cartItems})
         
    }
    
    render() {
        console.log(this.state.books)
        return (
            <BookContext.Provider value={{...this.state,addtoCart:this.onAddCart, removeCart:this.onRemoveCart}}>
                {this.props.children}
            </BookContext.Provider>
        )
    }
}

const BookConsumer = BookContext.Consumer;

export {BookProvider,BookConsumer}

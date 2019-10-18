import React, { Component } from 'react'


const BookContext = React.createContext()


class BookProvider extends Component {
state = {
            books:[],
            isLoaded:false,
            cartItems:[]
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
        book.isInCart = true;
        const cartItem=this.state.cartItems.find(cartItem=>cartItem.id===book.id)
        !cartItem && this.setState(({cartItems:[...this.state.cartItems,book]}));
        
         
    }


    onRemoveCart=(id)=>{
        this.state.books.map(book=>{
            return book.id===id ? book.isInCart = false: null
        })
        console.log("Removed", id)
        const cartItems=this.state.cartItems.filter(cartItem=>cartItem.id !==id);
        this.setState({cartItems:cartItems})
         
    }

    onCheckOut=(cartItems)=>{
        cartItems.map(cartItem=>{
            cartItem.isAvailable=false;
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()+3);
            cartItem.returnDate=date;
            console.log(cartItem)
            this.state.books.map(book=>{
                return cartItem.id===book.id? book.returnDate=date : null
            })  
        })
        // setTimeout(()=>{
        //     this.setState({cartItems:[]})
        // },10000)
    }
    
    render() {
        console.log(this.state.books)
        return (
            <BookContext.Provider value={
                {...this.state,
                addtoCart:this.onAddCart, 
                removeCart:this.onRemoveCart,
                checkOut:this.onCheckOut
                }}>
                {this.props.children}
            </BookContext.Provider>
        )
    }
}

const BookConsumer = BookContext.Consumer;

export {BookProvider,BookConsumer}

export default function(){
  //add to cart
  addToCart(oldCart,item,quantity=1){
    let found = false
    let newCart = (oldCart || []).map((cartitem)=>{
      if(cartitem.id == item.id){
        cartitem.quantity++
        found = true
      }
    })

    if(!found){
      item.quantity = 1
      newCart.push(item)
    }

    //update newCart in sessionStore
  }

  //remove from cart

  //generate order detail

  return {
    addToCart,
    removeFromCart,
    generateOrderDetails
  }
}()

import Item from '../../models/item'
import Cart from '../../models/cart'

export default cartHandler(){

  function addToCart(req,res,next){
    let itemId = req.body.itemId
    Item.findOne({where:{id:itemId}})
    .then((item)=>{
      let cart = new Cart(oldCart,item)
      res.status(200)
      res.send('success')
    })
    .catch((err)=>{
      res.status(400)
      res.send('--error--',err)
    })
  }

  return {
    init: function(app){
      app.post('/cart/add',addToCart)
      app.post('/cart/remove',removeFromCart)
      app.get('/cart/details',getCartDetails)
    }
  }
}()

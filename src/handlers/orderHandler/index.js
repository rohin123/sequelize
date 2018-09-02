import Order from '../../models/item'

export default ()=>{
  function listOrder(req,res,next){
    Order.findAll()
    .then((items)=>{
      res.status(200)
      res.send(items)
    })
    .catch((err)=>{
      res.status(400)
      res.send('Some thing wrong', err)
    })
  }

  function addOrder(req,res,next){
    Order.create({
      name: req.body.name,
      price: req.body.price
    })
    .then((item)=>{
      res.status(200)
      res.send(item)
    })
    .catch((err)=>{
      res.status(400)
      res.send('Some thing wrong', err)
    })
  }

  function removeOrder(){
    let itemId = req.params.id

    Order.destroy({ where:{ id: itemId } })
    .then((success)=>{
      res.status(400)
      res.send(success)
    })
    .catch((err)=>{
      res.status(400)
      res.send('Some thing wrong', err)
    })
  }

  function updateOrder(req,res,next){
    let itemId = req.params.id

    Order.update(req.body,{ where:{ id: itemId } })
    .then((item)=>{
      res.status(400)
      res.send(item)
    })
    .catch((err)=>{
      res.status(400)
      res.send('Some thing wrong', err)
    })
  }

  return init(app){
    app.get('/api/orders',listOrder)
    app.post('/api/orders',addOrder)
    app.delete('/api/orders/:id',removeOrder)
    app.put('/api/orders/:id',updateOrder)
  }
}()

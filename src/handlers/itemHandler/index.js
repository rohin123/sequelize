import Item from '../../models/item'

export default ()=>{
  function listItem(req,res,next){
    Item.findAll()
    .then((items)=>{
      res.status(200)
      res.send(items)
    })
    .catch((err)=>{
      res.status(400)
      res.send('Some thing wrong', err)
    })
  }

  function addItem(req,res,next){
    Item.create({
      name: req.body.name,
      images: req.body.images,
      description: req.body.description,
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

  function removeItem(){
    let itemId = req.params.id

    Item.destroy({ where:{ id: itemId } })
    .then((success)=>{
      res.status(400)
      res.send(success)
    })
    .catch((err)=>{
      res.status(400)
      res.send('Some thing wrong', err)
    })
  }

  function updateItem(req,res,next){
    let itemId = req.params.id

    Item.update(req.body,{ where:{ id: itemId } })
    .then((item)=>{
      res.status(400)
      res.send(item)
    })
    .catch((err)=>{
      res.status(400)
      res.send('Some thing wrong', err)
    })
  }

  return {
    init : (app)=>{
      app.get('/api/items',listItem)
      app.post('/api/items',addItem)
      app.delete('/api/items/:id',removeItem)
      app.put('/api/items/:id',updateItem)
    }
  }
}()

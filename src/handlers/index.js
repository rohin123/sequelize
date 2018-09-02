import UserHandler from './userHandler'
import ItemHandler from './itemHandler'
//import passportMW from '../middlewares/passport'

export default function init(app){
  console.log(UserHandler)
  UserHandler.init(app)
  ItemHandler.init(app)
}

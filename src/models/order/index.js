import Sequelize from 'sequelize'
import sequelizeDb from '../../database'
import Payment from '../payment'

const Order = sequelizeDb.define({
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true
  },
  items: Sequelize.JSON,
  detailedBill: Sequelize.JSON,
  amount: Sequelize.DECIMAL(10,2)
})

Order.belongsTo(Payment)
Order.belongsTo(User)
Order.belongsTo(Item)

Order.sync()

export default Order

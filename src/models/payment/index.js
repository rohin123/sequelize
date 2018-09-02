import Sequelize from 'sequelize'
import sequelizeDb from '../../database'

const Payment = sequelizeDb.define({
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true
  },
  amount: Sequelize.DECIMAL(10,2),
  tax: Sequelize.DECIMAL(4,2),
})

Payment.sync()

export default Payment

import Sequelize from 'sequelize'
import sequelizeDb from '../../database'

const Item = sequelizeDb.define({
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true
  },
  name: Sequelize.STRING,
  images: Sequelize.JSON,
  description: Sequelize.Text,
  price: Sequelize.DECIMAL(10,2)
})

Item.sync()

export default Item

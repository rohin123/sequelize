import sequelizeDb from '../../database'
import Sequelize from 'sequelize'

const Session = sequelizeDb.define('session',{
  sid: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  expires: Sequelize.DATE,
  data: Sequelize.TEXT
})

Session.sync()

export default Session

import sequelizeDb from '../../database'
import Sequelize from 'sequelize';

const User = sequelizeDb.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  password: {
    type: Sequelize.STRING
  }
});

User.sync({force:false})

export default User

const { DataTypes } = require('sequelize');
const db = requires('..db//connection')


const Menu = db.define('Menu', {
        title: {
            type: DataTypes.STRING,
        }

        });


        module.exports = Menu
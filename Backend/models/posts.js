'use strict';
const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize(process.env.PG_URI)

class Post extends Model { }

Post.init({
   

    title: {
        type: DataTypes.String,
        allowNull: false
    },
    postText: {
        type: DataTypes.String,
        allowNull: false
    },
    username: {
        type: DataTypes.String,
        allowNull: false
    }
        
}, {
    sequelize,
    modelName: 'Post',
    tableName: 'posts',
    timestamps: false

})
module.exports = Post
    

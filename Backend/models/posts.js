'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The models/index file will call this method automatically.
     */
     static associate({ Entry }){
        Post.hasMany(Entry, {
        foreignKey: "entry_id",
        as: "post_entries"
      })
    }



  }
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
return Post
}

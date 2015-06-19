import {FoodListCollection} from './FoodListModel';

export default Backbone.Model.extend({
  idAttribute: 'objectId',

  urlRoot: 'https://api.parse.com/1/classes/Orders',

defaults: {
  itemName: '',
  itemDescription: '',
  itemPrice: '',
},

//subtotal belongs here.
initalize: function(){
  //create a food list collection to keep track of food on orders.
  this.foodListModel = new foodListCollection();

  //trigger all foodListModels on myself.
  this.listenTo(this.foodListModel, 'all', this.trigger.bind(this));
},

//Proxy the add method to the underlying foodListCollection
add: function(models, options){
  this.foodListModel.add(models, options);
},

//Proxy the remove method to the underlying foodListCollection
remove: function(models, options){
  this.foodListModel.remove(models, options);

},

toJSON: function(){
  return _.extend ({}, this.atributes, {
    foodListModel: this.foodListModel.map(function(foodListModel){
      return{
      "type": "Pointer",
      "className": "FoodListModel",
      "objectId": foodListModel.id,
      };
    })
  });
},


});

Orders.set();
Orders.save();

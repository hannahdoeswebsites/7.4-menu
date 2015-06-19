var FoodListModel = Backbone.Model.extend({
  idAttribute: 'objectId',


defaults: function(){
  return {
    itemName: '',
    itemDescription: '',
    itemPrice: '',


  };
},

});

var foodListModel = new FoodListModel({}
);


var FoodListCollection = Backbone.Colletion.extend({
  model: FoodListModel,

  url: "https://api.parse.com/1/classes/menu",

  //The Parse API returns models under "results"
  //Also Remove ObjectID from attributes
parse:function(response){
  return _.map(response.results, function(foodListModel){
    foodListModel.id = foodListModel.objectID;
    delete foodListModel.objectId;
    return foodListModel;
  });
}

});

export default {FoodListModel, FoodListCollection};

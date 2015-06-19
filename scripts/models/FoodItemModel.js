var MenuItemModel = Backbone.Model.extend({


  	idAttribute: 'objectId',

  });

  var FoodCollection = Backbone.Collection.extend({
    Model: MenuItemModel,
  	url: 'https://api.parse.com/1/classes/menu',
  	parse: function(response) {
  		return response.results;
  	}

  });

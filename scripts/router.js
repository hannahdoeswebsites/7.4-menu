import MenuTypeView from './views/MenuTypeView';
import OrderView from './views/OrderView';
import FoodItemView from '.views/FoodItemView';
import FoodListView from '.views/FoodListView';
import {FoodItemModel} from './models/FoodItemView';
import {FoodListModel} from './models/FoodListView';
import {MenuTypeModel} from '/models/MenuTypeModel';
import {OrderModel} from './models/OrderModel';


var Router = Backbone.Router.extend({

	routes: {
		'': 'index',
	},

	initialize: function() {
		this.menu = new FoodCollection();
		this.order = new Order();
	},

	index: function() {
		this.menu.fetch().then(function(data) {
			this.menuView = new MenuView({collection: this.menu,
											order: this.order});
			$('.app').html(this.menuView.el);
		}.bind(this));
		this.orderView = new OrderView({collection: this.order});
		$('.checkout').html(this.orderView.el);
	},



});

var router = new Router();
export default router;

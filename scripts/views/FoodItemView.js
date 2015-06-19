export default Backbone.View.extend({

	template: JST['menu'],

	tagName: 'ul',
	className: 'main-menu',

	events: {
		'click .main-menu': 'addItem',
	},

	initialize: function(options) {
		this.render();
		this.order = options.order;
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
	},

	addItem: function() {
		this.order.add(this.model);
	}

});

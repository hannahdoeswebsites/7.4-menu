Collections go in Main.Js!!!!!!!!


- [ ] Setup the scaffolding and install Backbone
- [ ] Setup templates for the different dynamic proportions of the application
- [ ] set up dynamic static mockup.
- [ ] setup static data for the menu options.


Food
- [ ] fetch and 'console.log' the static JSON for the menu items
- [ ] render a hbs template for each menu items, not according to caterogy
- [ ] define a FoodListView constructor
- [ ] Make a view responsible instead of just a template for the collection.
- [ ] define a FoodItemView
- [ ] use the 'renderChildren' model to render a child view for each food item.
- [ ] console.log the food model when you click on the price button
- [ ] define an order constructor
- [ ] create an instance or order
- [ ] pass the order to the child views
- [ ] console.log the order when I click on the food's price
- [ ] add food model to orders
- [ ] define a FoodCategoryView constructor
- [ ] make instances of FoodCategoryView for each category, moving the renderChildren down a level.
- [ ] make an instance of FoodCategory view for popularity


Popular items = menuItemCollection.filter(i=)


group by category
<!-- _.each(foods.groupBy('category'), function(foods, category){
  console.log(category, foods);
  }); -->


  Order View
  - [ ] define an OrderView constructor
  - [ ] Render an instance of OrderView
  - [ ] in order view, console.log the order
  - [ ] in orderView, console.log a food model every time a food model is added to the order
  - [ ] render the data from the order every time the order is updated.
  - [ ] in OrderCollection define a subtotal function that calculated the total price.
  - [ ] console.log then render every time the order is updated.


  Order Date
  - [ ] Save the order data to parse when the data is submitted.

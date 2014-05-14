Myshoppinglist.IndexRoute = Em.Route.extend({
	 queryParams: {
    query: {
      refreshModel: true
    }
  },
  // activate: function() {},
  // deactivate: function() {},
  // setupController: function(controller, model) {},
  // renderTemplate: function() {},
  // beforeModel: function() {},
  // afterModel: function() {},
  
  model: function(param) {
      // return this.store.findAll('ShoppingItem');
       return this.store.find('ShoppingItem');
  }
});

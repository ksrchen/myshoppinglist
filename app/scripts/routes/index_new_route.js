Myshoppinglist.IndexNewRoute = Em.Route.extend({
  // activate: function() {},
  // deactivate: function() {},
  // setupController: function(controller, model) {},
  // renderTemplate: function() {},
  // beforeModel: function() {},
  // afterModel: function() {},
  
  model: function() {
     var shoppingItem = this.store.createRecord('ShoppingItem', {
      Description: '',
      Active : true,
      ShoppingItemId : 0
      });
      return shoppingItem;
  }
  // setupController: function(controller) {
  //   var shoppingItem = this.store.createRecord('ShoppingItem', {
  //     Description: '',
  //     Active : true,
  //     ShoppingItemId : 0
  //   });
  //   controller.set('model', shoppingItem);
  // }
});

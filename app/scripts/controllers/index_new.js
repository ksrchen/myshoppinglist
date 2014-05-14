Myshoppinglist.IndexNewController = Em.ObjectController.extend({
  // Description: 'What is new?',
  actions: {
  	save : function() {
    //   var description = this.get('controller.Description');
  		// var item = this.store.createRecord('ShoppingItem', {
  		// 	Description : description,
  		// 	ShoppingItemId : 0,
  		// 	Active : true,
  		// });
      var item = this.get('model');
  		var controller = this;
  		item.save().then(function(){
	  		// controller.set('Description', '');
	  		controller.transitionToRoute('index');
  		});
  	},
  	close: function(){
      var item = this.get('model');
      item.deleteRecord();
  		this.transitionToRoute('index');
  	}
  }
});

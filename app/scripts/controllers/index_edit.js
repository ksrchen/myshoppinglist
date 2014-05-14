Myshoppinglist.IndexEditController = Em.ObjectController.extend({
   actions: {
    close: function(){
      var item = this.get('model');
      item.rollback();
      this.transitionToRoute('index');
    },
    save : function() {
      var item = this.get('model');
  		var controller = this;
  		item.save().then(function(){
	  		// controller.set('Description', '');
	  		controller.transitionToRoute('index');
  		});
  	},
  }
});

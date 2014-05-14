Myshoppinglist.IndexController = Em.ArrayController.extend({
  queryParams : ['query'],
  query : null,
   actions:{
  	add : function() {
  		 //var item = this.store.createRecord('ShoppingItem');
  		this.transitionToRoute('index.new');
  	},
  	delete : function(item){
  		var self = this;
  		item.deleteRecord();
  		item.save().then(function(){
  			self.transitionToRoute('index');
  		});
  	}
  }
});

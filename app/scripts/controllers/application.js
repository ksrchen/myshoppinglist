Myshoppinglist.ApplicationController = Em.ObjectController.extend({
  	query : 'test',  	
  	 actions: {
  		search : function  () {
  			this.transitionToRoute('index', {queryParams : {query: 'test'}});
  			// return false;
  		}
  	}
});

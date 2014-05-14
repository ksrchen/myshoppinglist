Myshoppinglist.Router.map(function () {
  	this.resource('index',  {path:'/'},  function() {
  		this.route('new');
  		this.route('edit', {path:'/edit/:shopping_item_id'});
  	})
});

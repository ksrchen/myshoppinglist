// Myshoppinglist.ApplicationAdapter = DS.FixtureAdapter;

Myshoppinglist.ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: 'api',
  host: 'http://localhost:57086/',
  ajax: function(url, method, hash) {
  	hash = hash || {};
    hash.crossDomain = true;
//    hash.xhrFields = {withCredentials: true};
    return this._super(url, method, hash);
  }
});

Myshoppinglist.ApplicationSerializer = DS.RESTSerializer.extend({
  primaryKey: 'ShoppingItemId',
 serialize: function(record, hash) {
   var json =  this._super(record, hash); 
   json.ShoppingItemId = record.id || '0';
   return json;
 }
});
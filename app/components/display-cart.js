import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
    removeAll(){
      this.get('shoppingCart').empty();
    },
    totalCostShoppingCart: Ember.computed('shoppingCart.items.[]', function(){
      var totalCost=0;
      // for(var i = 0; i < this.get('shoppingCart.items').length; i++){
      //   totalcost+= this.get('shoppingCart.items[i]').cost;
      // }
      debugger;
      return totalCost;
    })
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  totalCostShoppingCart: Ember.computed('shoppingCart.items.[]', function(){
    var totalCost=0;
    for (var item of this.get('shoppingCart.items')) {
      totalCost+= item.cost;
    }
    return totalCost;
  }),
  actions: {
    removeAll(){
      this.get('shoppingCart').empty();
    }
  }
});

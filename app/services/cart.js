import Ember from 'ember';

export function buildQuantity(snowball, item) {
  const existing = snowball.findBy('data', item.data)

  if (existing) {
    existing.quantity += item.quantity;
    return snowball;
  }
  return [...snowball, item];
}

export default Ember.Service.extend({
  items: [],

  addToCart(data) {
    this.set('items', this.items.reduce(buildQuantity, [{ quantity: 1, data }]));
    this.set('items', [...this.items, {quantity: 1, data}]);
    //
  }
});

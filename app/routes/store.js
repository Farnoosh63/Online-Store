import Ember from 'ember';
var items = [{
  id: 1,
  title: "Apples",
  description: "Honeycrisp. Crisp and Distinctly Sweet from Costco",
  cost: 10,
  image: "http://us.hellomagazine.com/imagenes/cuisine/201211059939/apple-season-varieties-recipes/0-49-886/apple-varieties--z.jpg"
}, {
  id: 2,
  title: "Towel",
  description: "bath from jcpenny",
  cost: 12,
  image: "http://www.prabhutextile.com/images/bath_towel_1.jpg"
}];

export default Ember.Route.extend({
  model() {
    return items;
  }
});

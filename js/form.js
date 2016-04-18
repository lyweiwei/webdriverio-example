import Backbone from 'backbone';
import template from './form.jade';

export default class Form extends Backbone.View {
  render() {
    this.$el.html(template());
    return this;
  }
};

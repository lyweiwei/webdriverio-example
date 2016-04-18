import $ from 'jquery';
import Form from '../../js/form';

$(() => {
  window.document.body.appendChild(new Form().render().el);
});

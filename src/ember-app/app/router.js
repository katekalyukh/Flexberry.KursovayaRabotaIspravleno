import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kursovaya-rabota-ispravleno-заказ-l');
  this.route('i-i-s-kursovaya-rabota-ispravleno-заказ-e',
  { path: 'i-i-s-kursovaya-rabota-ispravleno-заказ-e/:id' });
  this.route('i-i-s-kursovaya-rabota-ispravleno-заказ-e.new',
  { path: 'i-i-s-kursovaya-rabota-ispravleno-заказ-e/new' });
  this.route('i-i-s-kursovaya-rabota-ispravleno-клиент-l');
  this.route('i-i-s-kursovaya-rabota-ispravleno-клиент-e',
  { path: 'i-i-s-kursovaya-rabota-ispravleno-клиент-e/:id' });
  this.route('i-i-s-kursovaya-rabota-ispravleno-клиент-e.new',
  { path: 'i-i-s-kursovaya-rabota-ispravleno-клиент-e/new' });
  this.route('i-i-s-kursovaya-rabota-ispravleno-оператор-l');
  this.route('i-i-s-kursovaya-rabota-ispravleno-оператор-e',
  { path: 'i-i-s-kursovaya-rabota-ispravleno-оператор-e/:id' });
  this.route('i-i-s-kursovaya-rabota-ispravleno-оператор-e.new',
  { path: 'i-i-s-kursovaya-rabota-ispravleno-оператор-e/new' });
  this.route('i-i-s-kursovaya-rabota-ispravleno-проверка-киоска-l');
  this.route('i-i-s-kursovaya-rabota-ispravleno-проверка-киоска-e',
  { path: 'i-i-s-kursovaya-rabota-ispravleno-проверка-киоска-e/:id' });
  this.route('i-i-s-kursovaya-rabota-ispravleno-проверка-киоска-e.new',
  { path: 'i-i-s-kursovaya-rabota-ispravleno-проверка-киоска-e/new' });
  this.route('i-i-s-kursovaya-rabota-ispravleno-фотокиоск-l');
  this.route('i-i-s-kursovaya-rabota-ispravleno-фотокиоск-e',
  { path: 'i-i-s-kursovaya-rabota-ispravleno-фотокиоск-e/:id' });
  this.route('i-i-s-kursovaya-rabota-ispravleno-фотокиоск-e.new',
  { path: 'i-i-s-kursovaya-rabota-ispravleno-фотокиоск-e/new' });
  this.route('i-i-s-kursovaya-rabota-ispravleno-чек-l');
  this.route('i-i-s-kursovaya-rabota-ispravleno-чек-e',
  { path: 'i-i-s-kursovaya-rabota-ispravleno-чек-e/:id' });
  this.route('i-i-s-kursovaya-rabota-ispravleno-чек-e.new',
  { path: 'i-i-s-kursovaya-rabota-ispravleno-чек-e/new' });
});

export default Router;

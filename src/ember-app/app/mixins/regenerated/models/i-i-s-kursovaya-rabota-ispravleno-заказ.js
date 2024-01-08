import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерЗаказа: DS.attr('number'),
  носитель: DS.attr('i-i-s-kursovaya-rabota-ispravleno-вид-носителя'),
  клиент: DS.belongsTo('i-i-s-kursovaya-rabota-ispravleno-клиент', { inverse: null, async: false }),
  фотокиоск: DS.belongsTo('i-i-s-kursovaya-rabota-ispravleno-фотокиоск', { inverse: null, async: false }),
  фото: DS.hasMany('i-i-s-kursovaya-rabota-ispravleno-фото', { inverse: 'заказ', async: false })
});

export let ValidationRules = {
  номерЗаказа: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-ispravleno-заказ.validations.номерЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  носитель: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-ispravleno-заказ.validations.носитель.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-ispravleno-заказ.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  фотокиоск: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-ispravleno-заказ.validations.фотокиоск.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  фото: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-ispravleno-заказ.validations.фото.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказE', 'i-i-s-kursovaya-rabota-ispravleno-заказ', {
    номерЗаказа: attr('Номер заказа', { index: 0 }),
    фотокиоск: belongsTo('i-i-s-kursovaya-rabota-ispravleno-фотокиоск', 'Фотокиоск', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: 1 }),
    клиент: belongsTo('i-i-s-kursovaya-rabota-ispravleno-клиент', 'Клиент', {
      iD: attr('Клиент', { index: 4 })
    }, { index: 3 }),
    носитель: attr('Носитель', { index: 5 }),
    фото: hasMany('i-i-s-kursovaya-rabota-ispravleno-фото', 'Фото', {
      количество: attr('Количество', { index: 0 }),
      вид: attr('Вид фото', { index: 1 }),
      стоимость: attr('Стоимость', { index: 2 })
    })
  });

  modelClass.defineProjection('ЗаказL', 'i-i-s-kursovaya-rabota-ispravleno-заказ', {
    номерЗаказа: attr('Номер заказа', { index: 0 }),
    фотокиоск: belongsTo('i-i-s-kursovaya-rabota-ispravleno-фотокиоск', 'Фотокиоск', {
      наименование: attr('Фотокиоск', { index: 1 })
    }, { index: -1, hidden: true }),
    клиент: belongsTo('i-i-s-kursovaya-rabota-ispravleno-клиент', 'Клиент', {
      iD: attr('Клиент', { index: 2 })
    }, { index: -1, hidden: true }),
    носитель: attr('Носитель', { index: 3 }),
    фото: hasMany('i-i-s-kursovaya-rabota-ispravleno-фото', '', {
      количество: attr('Количество', { index: 0 }),
      вид: attr('Вид фото', { index: 1 }),
      стоимость: attr('Стоимость', { index: 2 })
    })
  });
};

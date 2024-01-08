import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  вид: DS.attr('i-i-s-kursovaya-rabota-ispravleno-выбор-вида'),
  количество: DS.attr('number'),
  стоимость: DS.attr('number'),
  заказ: DS.belongsTo('i-i-s-kursovaya-rabota-ispravleno-заказ', { inverse: 'фото', async: false })
});

export let ValidationRules = {
  вид: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-ispravleno-фото.validations.вид.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  количество: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-ispravleno-фото.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-ispravleno-фото.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-ispravleno-фото.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФотоE', 'i-i-s-kursovaya-rabota-ispravleno-фото', {
    количество: attr('Количество', { index: 0 }),
    вид: attr('Вид', { index: 1 }),
    стоимость: attr('Стоимость', { index: 2 })
  });

  modelClass.defineProjection('ФотоL', 'i-i-s-kursovaya-rabota-ispravleno-фото', {
    количество: attr('Количество', { index: 0 }),
    вид: attr('Вид фото', { index: 1 }),
    стоимость: attr('Стоимость', { index: 2 })
  });
};

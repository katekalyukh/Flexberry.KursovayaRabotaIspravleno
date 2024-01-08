import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-rabota-ispravleno-клиент', 'Unit | Model | i-i-s-kursovaya-rabota-ispravleno-клиент', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kursovaya-rabota-ispravleno-заказ',
    'model:i-i-s-kursovaya-rabota-ispravleno-клиент',
    'model:i-i-s-kursovaya-rabota-ispravleno-оператор',
    'model:i-i-s-kursovaya-rabota-ispravleno-проверка-киоска',
    'model:i-i-s-kursovaya-rabota-ispravleno-фото',
    'model:i-i-s-kursovaya-rabota-ispravleno-фотокиоск',
    'model:i-i-s-kursovaya-rabota-ispravleno-чек',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});

import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-rabota-ispravleno-чек', 'Unit | Serializer | i-i-s-kursovaya-rabota-ispravleno-чек', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursovaya-rabota-ispravleno-чек',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kursovaya-rabota-ispravleno-вид-носителя',
    'transform:i-i-s-kursovaya-rabota-ispravleno-выбор-вида',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});

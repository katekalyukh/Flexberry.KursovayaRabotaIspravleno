import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ВыборВидаEnum from '../enums/i-i-s-kursovaya-rabota-ispravleno-выбор-вида';

export default FlexberryEnum.extend({
  enum: ВыборВидаEnum,
  sourceType: 'IIS.KursovayaRabotaIspravleno.ВыборВида'
});

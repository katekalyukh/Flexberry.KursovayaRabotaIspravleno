import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ВидНосителяEnum from '../enums/i-i-s-kursovaya-rabota-ispravleno-вид-носителя';

export default FlexberryEnum.extend({
  enum: ВидНосителяEnum,
  sourceType: 'IIS.KursovayaRabotaIspravleno.ВидНосителя'
});

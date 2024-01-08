import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kursovaya-rabota-ispravleno.caption'),
          title: i18n.t('forms.application.sitemap.kursovaya-rabota-ispravleno.title'),
          children: [{
            link: 'i-i-s-kursovaya-rabota-ispravleno-чек-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-ispravleno.i-i-s-kursovaya-rabota-ispravleno-чек-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-ispravleno.i-i-s-kursovaya-rabota-ispravleno-чек-l.title'),
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-ispravleno-клиент-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-ispravleno.i-i-s-kursovaya-rabota-ispravleno-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-ispravleno.i-i-s-kursovaya-rabota-ispravleno-клиент-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-ispravleno-проверка-киоска-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-ispravleno.i-i-s-kursovaya-rabota-ispravleno-проверка-киоска-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-ispravleno.i-i-s-kursovaya-rabota-ispravleno-проверка-киоска-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-ispravleno-заказ-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-ispravleno.i-i-s-kursovaya-rabota-ispravleno-заказ-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-ispravleno.i-i-s-kursovaya-rabota-ispravleno-заказ-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-ispravleno-оператор-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-ispravleno.i-i-s-kursovaya-rabota-ispravleno-оператор-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-ispravleno.i-i-s-kursovaya-rabota-ispravleno-оператор-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-ispravleno-фотокиоск-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-rabota-ispravleno.i-i-s-kursovaya-rabota-ispravleno-фотокиоск-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-rabota-ispravleno.i-i-s-kursovaya-rabota-ispravleno-фотокиоск-l.title'),
            icon: 'address card',
            children: null
          }]
        }
      ]
    };
  }),
})
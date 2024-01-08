import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISKursovayaRabotaIspravlenoЗаказLForm from './forms/i-i-s-kursovaya-rabota-ispravleno-заказ-l';
import IISKursovayaRabotaIspravlenoКлиентLForm from './forms/i-i-s-kursovaya-rabota-ispravleno-клиент-l';
import IISKursovayaRabotaIspravlenoОператорLForm from './forms/i-i-s-kursovaya-rabota-ispravleno-оператор-l';
import IISKursovayaRabotaIspravlenoПроверкаКиоскаLForm from './forms/i-i-s-kursovaya-rabota-ispravleno-проверка-киоска-l';
import IISKursovayaRabotaIspravlenoФотокиоскLForm from './forms/i-i-s-kursovaya-rabota-ispravleno-фотокиоск-l';
import IISKursovayaRabotaIspravlenoЧекLForm from './forms/i-i-s-kursovaya-rabota-ispravleno-чек-l';
import IISKursovayaRabotaIspravlenoЗаказEForm from './forms/i-i-s-kursovaya-rabota-ispravleno-заказ-e';
import IISKursovayaRabotaIspravlenoКлиентEForm from './forms/i-i-s-kursovaya-rabota-ispravleno-клиент-e';
import IISKursovayaRabotaIspravlenoОператорEForm from './forms/i-i-s-kursovaya-rabota-ispravleno-оператор-e';
import IISKursovayaRabotaIspravlenoПроверкаКиоскаEForm from './forms/i-i-s-kursovaya-rabota-ispravleno-проверка-киоска-e';
import IISKursovayaRabotaIspravlenoФотокиоскEForm from './forms/i-i-s-kursovaya-rabota-ispravleno-фотокиоск-e';
import IISKursovayaRabotaIspravlenoЧекEForm from './forms/i-i-s-kursovaya-rabota-ispravleno-чек-e';
import IISKursovayaRabotaIspravlenoЗаказModel from './models/i-i-s-kursovaya-rabota-ispravleno-заказ';
import IISKursovayaRabotaIspravlenoКлиентModel from './models/i-i-s-kursovaya-rabota-ispravleno-клиент';
import IISKursovayaRabotaIspravlenoОператорModel from './models/i-i-s-kursovaya-rabota-ispravleno-оператор';
import IISKursovayaRabotaIspravlenoПроверкаКиоскаModel from './models/i-i-s-kursovaya-rabota-ispravleno-проверка-киоска';
import IISKursovayaRabotaIspravlenoФотоModel from './models/i-i-s-kursovaya-rabota-ispravleno-фото';
import IISKursovayaRabotaIspravlenoФотокиоскModel from './models/i-i-s-kursovaya-rabota-ispravleno-фотокиоск';
import IISKursovayaRabotaIspravlenoЧекModel from './models/i-i-s-kursovaya-rabota-ispravleno-чек';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya-rabota-ispravleno-заказ': IISKursovayaRabotaIspravlenoЗаказModel,
    'i-i-s-kursovaya-rabota-ispravleno-клиент': IISKursovayaRabotaIspravlenoКлиентModel,
    'i-i-s-kursovaya-rabota-ispravleno-оператор': IISKursovayaRabotaIspravlenoОператорModel,
    'i-i-s-kursovaya-rabota-ispravleno-проверка-киоска': IISKursovayaRabotaIspravlenoПроверкаКиоскаModel,
    'i-i-s-kursovaya-rabota-ispravleno-фото': IISKursovayaRabotaIspravlenoФотоModel,
    'i-i-s-kursovaya-rabota-ispravleno-фотокиоск': IISKursovayaRabotaIspravlenoФотокиоскModel,
    'i-i-s-kursovaya-rabota-ispravleno-чек': IISKursovayaRabotaIspravlenoЧекModel
  },

  'application-name': 'Kursovaya rabota ispravleno',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kursovaya rabota ispravleno',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya rabota ispravleno',
          title: 'Kursovaya rabota ispravleno'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'kursovaya-rabota-ispravleno': {
          caption: 'KursovayaRabotaIspravleno',
          title: 'KursovayaRabotaIspravleno',
          'i-i-s-kursovaya-rabota-ispravleno-чек-l': {
            caption: 'Чек',
            title: ''
          },
          'i-i-s-kursovaya-rabota-ispravleno-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-kursovaya-rabota-ispravleno-проверка-киоска-l': {
            caption: 'Проверка киоска',
            title: ''
          },
          'i-i-s-kursovaya-rabota-ispravleno-заказ-l': {
            caption: 'Заказ',
            title: ''
          },
          'i-i-s-kursovaya-rabota-ispravleno-оператор-l': {
            caption: 'Оператор',
            title: ''
          },
          'i-i-s-kursovaya-rabota-ispravleno-фотокиоск-l': {
            caption: 'Фотокиоск',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-kursovaya-rabota-ispravleno-заказ-l': IISKursovayaRabotaIspravlenoЗаказLForm,
    'i-i-s-kursovaya-rabota-ispravleno-клиент-l': IISKursovayaRabotaIspravlenoКлиентLForm,
    'i-i-s-kursovaya-rabota-ispravleno-оператор-l': IISKursovayaRabotaIspravlenoОператорLForm,
    'i-i-s-kursovaya-rabota-ispravleno-проверка-киоска-l': IISKursovayaRabotaIspravlenoПроверкаКиоскаLForm,
    'i-i-s-kursovaya-rabota-ispravleno-фотокиоск-l': IISKursovayaRabotaIspravlenoФотокиоскLForm,
    'i-i-s-kursovaya-rabota-ispravleno-чек-l': IISKursovayaRabotaIspravlenoЧекLForm,
    'i-i-s-kursovaya-rabota-ispravleno-заказ-e': IISKursovayaRabotaIspravlenoЗаказEForm,
    'i-i-s-kursovaya-rabota-ispravleno-клиент-e': IISKursovayaRabotaIspravlenoКлиентEForm,
    'i-i-s-kursovaya-rabota-ispravleno-оператор-e': IISKursovayaRabotaIspravlenoОператорEForm,
    'i-i-s-kursovaya-rabota-ispravleno-проверка-киоска-e': IISKursovayaRabotaIspravlenoПроверкаКиоскаEForm,
    'i-i-s-kursovaya-rabota-ispravleno-фотокиоск-e': IISKursovayaRabotaIspravlenoФотокиоскEForm,
    'i-i-s-kursovaya-rabota-ispravleno-чек-e': IISKursovayaRabotaIspravlenoЧекEForm
  },

});

export default translations;

const btn = document.getElementById('btn');

// ✅ Toggle button text on click
btn.addEventListener('click', function handleClick() {
  const initialText = 'РУС';

  if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    translate1();
    function translate1() {
      $("[data-translate]").each(function(){
          var key = $(this).data('translate');
          $(this).html(dictionary[key][langs[1]] || "N/A");
      });
    }
    btn.textContent = ' ENG';
  } else {
    translate1();
    function translate1() {
      $("[data-translate]").each(function(){
          var key = $(this).data('translate');
          $(this).html(dictionary[key][langs[0]] || "N/A");
      });
    }
    btn.textContent = initialText;
  }
  
});
  var dictionary = {
        'h1': {
            'ru': 'Политика'+'<br>'+'конфиденциальности',
            'en': 'Privacy policy',
        },
        'terms-h1': {
          'ru': 'Условия'+'<br>'+'использования',
          'en': 'Terms of Use',
        },
        'h1_main': {
          'ru': 'Тренируйся дома.'+'<br>'+'Сломай систему.',
          'en': 'Train at home.'+'<br>' +'Break the system.',
        },
        'pre_intro': {
          'ru': 'Приложение для самостоятельных тренировок.'+'<br>'+'Выносливость. Похудение. Набор массы.',
          'en': 'Application for self-training.'+'<br>' +'Endurance. Slimming. Mass set.',
        },
        'benefit-text-1': {
          'ru': 'Тренировки дома'+'<br>'+'без оборудования',
          'en': 'Workouts at home'+'<br>'+'without equipment',
        },
        'benefit-text-2': {
          'ru': 'Большие тренировочные'+'<br>'+'программы',
          'en': 'Large training'+'<br>'+'programs',
        },
        'benefit-text-3': {
          'ru': 'Таймеры:'+'<br>'+'AFAP, AMRAP, EMOM,'+'<br>'+'Tabata, интервальный',
          'en': 'Timers:'+'<br>'+'AFAP, AMRAP, EMOM,'+'<br>'+'Tabata, interval',
        },
        'benefit-text-4': {
          'ru': 'Справочник с видео'+'<br>'+'и техникой выполнения',
          'en': 'Handbook with video'+'<br>'+'and technique',
        },
        'benefit-text-5': {
          'ru': 'Тренировочный дневник',
          'en': 'Training diary',
        },
        'benefit-text-6': {
          'ru': 'Подходит для разных' +'<br>'+'уровней подготовки',
          'en': 'Suitable for different' +'<br>'+'training levels',
        },
        'h2-main': {
          'ru': 'Поможем создать тело мечты',
          'en': 'Helping with body creation',
        },
        'sport-box-1': {
          'ru': 'Сотни упражнений с видео'+'<br>'+'и подробными описаниями.',
          'en': 'Hundreds of exercises with videos'+'<br>'+'and detailed descriptions.',
        },
        'sport-box-2': {
          'ru': 'Различные таймеры и дневник'+'<br>'+'тренировок.',
          'en': 'Various timers and a diary'+'<br>'+'workouts.',
        },
        'sport-box-3': {
          'ru': 'Сотни упражнений с видео'+'<br>'+'и подробными описаниями.',
          'en': 'Hundreds of exercises with videos'+'<br>'+' and detailed descriptions.',
        },
        'banner-content-h3': {
          'ru': 'Начните'+'<span class="span-red">'+' сейчас'+'</span>',
          'en': 'Start'+'<span class="span-red">'+'now'+'</span>',
        },
        'banner-content-p': {
          'ru': 'FitHack - удобный инструмент для '+'<br>'+'улучшения вашей физической формы. '+'<br>'+'Повышение эффективности тренировок.',
          'en': 'FitHack is a handy tool to '+'<br>'+'improve your fitness. '+'<br>'+'Increase the effectiveness of training.',
        },
        
        'policy': {
            'ru': 'Политика конфиденциальности',
            'en': 'Privacy policy',
        },
         'terms': {
           'ru': 'Условия использования',
           'en': 'Terms of Use',
         },
         'social': {
           'ru': 'Мы в соц. сетях',
           'en': 'Social networks',
         },
         'about': {
           'ru': 'О нас',
           'en': 'About us',
         },
         'brand': {
           'ru': 'Фитхак',
           'en': 'FITHACK',
         },
         'privacy_policy': {
           'ru': 'Политика конфиденциальности Политика конфиденциальности Политика конфиденциальности Политика конфиденциальности Политика конфиденциальности Политика конфиденциальности Политика конфиденциальности Политика конфиденциальности Политика конфиденциальности Политика конфиденциальности Политика конфиденциальности Политика конфиденциальности Политика конфиденциальности Политика конфиденциальности Политика конфиденциальности Политика конфиденциальности Политика конфиденциальности Политика конфиденциальности Политика конфиденциальности Политика конфиденциальности Политика конфиденциальности Политика конфиденциальности Политика конфиденциальности Политика конфиденциальности Политика конфиденциальности Политика конфиденциальности Политика конфиденциальности Политика конфиденциальности Политика конфиденциальности Политика конфиденциальности',
           'en': 'Lorem ipsum dolor sit amet, consectetur adipiscing in tempor id eu nisl nunc. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.',
         },
         'terms-description': {
          'ru': 'Условия использования Условия использования Условия использования Условия использования Условия использования Условия использования Условия использования Условия использования Условия использования ',
          'en': 'Lorem ipsum dolor sit amet, consectetur adipiscing in tempor id eu nisl nunc. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.',
        },
         
         
};
var langs = ['ru', 'en'];
var current_lang_index = 0;
var current_lang = langs[current_lang_index];

// window.change_lang = function() {
//     current_lang_index = ++current_lang_index % 2;
//     current_lang = langs[current_lang_index];
//     translate();
// }

// function translate() {
//     $("[data-translate]").each(function(){
//         var key = $(this).data('translate');
//         $(this).html(dictionary[key][current_lang] || "N/A");
//     });
// }

// translate();
var language = window.navigator.userLanguage || window.navigator.language;
$(document).ready(function(){
  console.log(language)
if (language == 'ru-RU' || 'ru') {
  translate1();
  function translate1() {
    $("[data-translate]").each(function(){
        var key = $(this).data('translate');
        $(this).html(dictionary[key][langs[0]] || "N/A");
    });
    btn.textContent = 'РУС';
    
}
} else {
  translate1();
  function translate1() {
    $("[data-translate]").each(function(){
        var key = $(this).data('translate');
        $(this).html(dictionary[key][langs[1]] || "N/A");
    });
  }
  btn.textContent = 'ENG';
}
});
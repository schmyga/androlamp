// Androzon Final Plugin
(function() {
    'use strict';
    
    console.log('Androzon loading...');
    
    if (typeof Lampa === 'undefined') {
        console.error('Lampa not found');
        return;
    }

    // Простой плагин для теста
    var plugin = {
        name: 'Androzon',
        version: '1.0.0',
        component: true,
        
        search: function(text, type) {
            return new Promise(function(resolve) {
                console.log('Androzon search:', text);
                
                var results = [{
                    title: 'Androzon: ' + text,
                    description: 'Плагин работает! 🎉',
                    year: '2024',
                    type: type || 'movie',
                    icon: 'https://raw.githubusercontent.com/lampa-player/lampa/master/src/img/icon.png'
                }];
                
                resolve(results);
            });
        }
    };

    // Регистрация плагина
    if (Lampa.Plugin && Lampa.Plugin.add) {
        Lampa.Plugin.add('androzon', plugin);
        console.log('Androzon registered with Lampa.Plugin.add');
    } 
    else if (typeof Manager !== 'undefined' && Manager.add) {
        Manager.add(plugin);
        console.log('Androzon registered with Manager.add');
    }
    else {
        console.error('No plugin registration method found');
    }

})();

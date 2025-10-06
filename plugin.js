// Androzon Plugin for Lampa
var plugin = {};

plugin.name = 'Androzon';
plugin.version = '1.0.0';
plugin.description = 'Search plugin';

plugin.search = function(text, type) {
    return new Promise((resolve) => {
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
};

// Регистрация в Lampa
if(typeof Manager !== 'undefined') {
    Manager.add(plugin);
    console.log('Androzon plugin registered');
}

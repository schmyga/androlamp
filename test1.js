// Androzon Plugin
var plugin = {};

plugin.name = 'Androzon';
plugin.version = '1.0.0';
plugin.description = 'Search plugin';

plugin.search = function(text, type) {
    return new Promise((resolve) => {
        var results = [{
            title: 'Тест: ' + text,
            description: 'Androzon работает!',
            year: '2024',
            type: type || 'movie'
        }];
        resolve(results);
    });
};

// Регистрация для Lampa
if(typeof Manager !== 'undefined') {
    Manager.add(plugin);
}

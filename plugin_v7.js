// Androzon Plugin
var plugin = {
    name: 'Androzon',
    version: '6.0',
    
    // ВКЛЮЧАЕМ компонент для кнопки
    component: true,
    
    search: function(text, type) {
        return new Promise(function(resolve) {
            console.log('Androzon search:', text);
            resolve([{
                title: 'Androzon: ' + text,
                description: 'Тест работает!',
                type: type || 'movie'
            }]);
        });
    }
};

// Регистрация
if(typeof Manager !== 'undefined') Manager.add(plugin);
if(typeof Lampa !== 'undefined' && Lampa.Plugin) Lampa.Plugin.add(plugin);

console.log('Androzon plugin loaded successfully');

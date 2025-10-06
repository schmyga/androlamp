(function(global) {
    var plugin = {
        name: 'Androzon',
        version: '1.0.0',
        
        search: function(text, type) {
            return new Promise(function(resolve) {
                resolve([{
                    title: '🎉 Androzon работает! Поиск: ' + text,
                    description: 'Плагин успешно загружен',
                    year: '2024',
                    type: type || 'movie'
                }]);
            });
        }
    };

    // Регистрация для Lampa
    if(global.Lampa && global.Lampa.Plugin) {
        global.Lampa.Plugin.add(plugin);
    }
    if(global.Manager) {
        global.Manager.add(plugin);
    }

})(this || window);

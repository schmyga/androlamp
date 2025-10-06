Lampa.Plugin.add("androzon",{
    name: 'Androzon',
    version: '1.0.0',
    
    search: function(text){
        return Promise.resolve([{
            title: 'Ура! ' + text,
            type: 'movie'
        }]);
    }
});

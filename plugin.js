// Androzon
this["Androzon"] = {
    name: "Androzon",
    version: "1.0.0",
    
    search: function(text) {
        return new Promise(function(resolve){
            resolve([{
                title: "Androzon: " + text,
                description: "РАБОТАЕТ!",
                type: "movie"
            }]);
        });
    }
};

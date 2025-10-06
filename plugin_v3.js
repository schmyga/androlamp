window.AndrozonPlugin = {
    name: 'Androzon',
    search: function(t){return Promise.resolve([{title:t}])}
};
Manager.add(window.AndrozonPlugin);

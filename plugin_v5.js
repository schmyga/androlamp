// Androzon Mini
this.AndrozonPlugin = {
    name: 'Androzon', 
    search: function(t){return Promise.resolve([{title:'Test: '+t}])}
};
if(Manager) Manager.add(this.AndrozonPlugin);

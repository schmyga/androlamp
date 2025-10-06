console.log('=== ANDROZON TEST LOADED ===');
this.TestPlugin = {name:'Test',version:'1.0',component:true,search:function(t){return Promise.resolve([{title:'Test:'+t}])}};
if(Manager) Manager.add(this.TestPlugin);
if(Lampa&&Lampa.Plugin) Lampa.Plugin.add(this.TestPlugin);

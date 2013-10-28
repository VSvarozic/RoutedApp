// Configure auto-loader
Ext.Loader.setConfig({
    enabled: true,
    paths: { 
        'RoutedApp.lib': './lib',
        'Ext.ux': './ux'
    }
});

Ext.log = function() {
	console.log.apply(console, arguments);
}
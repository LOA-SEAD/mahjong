require.config({

    deps: ["main"],

    paths: {
        "jquery": "./libs/jquery-3.2.1",
		"ui": "./libs/jquery.ui"
    },

    shim: {
    	"ui": {
            exports: "$",
            deps: ['jquery']
    	}
    }

});

require(['ui', 'interface'], function ($, Interface) {
    $(document).ready(function () {
		Interface.iniciar();
    });
}); 

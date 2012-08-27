
// path is a '.' separated list of names
// creates the chained list of context names if they don't exist and return them
// fundamental way to ensure namespaces exist in the system
GetContext = function(path){
    var context = window;

    _.each((path && path.split('.')), function(pathPart){
        if(!context[pathPart]){
            context[pathPart] = {};
        }

        context = context[pathPart];
    });

    return context;
};


// create default namespace for utils
GetContext('AlgPal');
GetContext('AlgPal.domain');


// Temporary cheats to make working with the debugger easier when creating types
window.D = AlgPal.domain;


AlgPal.Assert = function(condition, message){
    if(!condition){
        throw message;
    }
};


AlgPal.IsType = function(obj, type){
    return obj instanceof type;
};
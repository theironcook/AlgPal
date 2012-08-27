
GetContext('AlgPal.domain').Variable = AlgPal.domain.Term.extend({

    initialize: function(){
        AlgPal.domain.Term.prototype.initialize.call(this);
    }

},
{
    TypeName: 'Variable',

    Create: function(name){
        AlgPal.utils.Assert(_.isString(name), 'Variable name must be set as a string');
        return new AlgPal.domain.Variable({name: name, type: AlgPal.domain.Variable.TypeName});
    }
});

GetContext('AlgPal.domain').Number = AlgPal.domain.Term.extend({

    initialize: function(){
        AlgPal.domain.Term.prototype.initialize.call(this);
    },

    toString: function(){
        return this.get('value');
    }

},
{
    TypeName: 'Number',

    Create: function(value){
        var convertedVal;

        if(_.isString(value)){
            convertedVal = Number(value);
            if(convertedVal !== Number.Nan){
                value = convertedVal;
            }
        }

        AlgPal.Assert(_.isNumber(value), 'Number value must be set as a number ', value);
        return new AlgPal.domain.Number({value: value, type: AlgPal.domain.Number.TypeName});
    }
});
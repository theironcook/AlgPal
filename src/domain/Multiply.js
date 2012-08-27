
GetContext('AlgPal.domain').Multiply = AlgPal.domain.Operator.extend({

    initialize: function(){
        AlgPal.domain.Operator.prototype.initialize.call(this);
    }

},
{
    TypeName: 'Multiply',

    Create: function(left, right){
        AlgPal.utils.Assert(AlgPal.utils.IsType(left, AlgPal.domain.Term), 'Left must be a term');
        AlgPal.utils.Assert(AlgPal.utils.IsType(right, AlgPal.domain.Term), 'Right must be a term');

        return new AlgPal.domain.Multiply({left: left, right: right, type: AlgPal.domain.Multiply.TypeName});
    }
});
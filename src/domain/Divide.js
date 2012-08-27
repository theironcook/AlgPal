
GetContext('AlgPal.domain').Divide = AlgPal.domain.Operator.extend({

    initialize: function(){
        AlgPal.domain.Operator.prototype.initialize.call(this);
    }

},
{
    TypeName: 'Divide',

    Create: function(left, right){
        AlgPal.utils.Assert(AlgPal.utils.IsType(left, AlgPal.domain.Term), 'Left must be a term');
        AlgPal.utils.Assert(AlgPal.utils.IsType(right, AlgPal.domain.Term), 'Right must be a term');

        return new AlgPal.domain.Divide({left: left, right: right, type: AlgPal.domain.Divide.TypeName});
    }
});
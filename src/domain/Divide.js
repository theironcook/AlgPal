
GetContext('AlgPal.domain').Divide = AlgPal.domain.BinaryOperator.extend({

    initialize: function(){
        AlgPal.domain.Operator.prototype.initialize.call(this);
    }

},
{
    TypeName: 'Divide',
    Symbol: '/',

    Create: function(left, right){
        AlgPal.Assert(AlgPal.IsType(left, AlgPal.domain.Term), 'Left must be a term');
        AlgPal.Assert(AlgPal.IsType(right, AlgPal.domain.Term), 'Right must be a term');

        return new AlgPal.domain.Divide({left: left, right: right, type: AlgPal.domain.Divide.TypeName, symbol: AlgPal.domain.Divide.Symbol});
    }
});
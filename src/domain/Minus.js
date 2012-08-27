
GetContext('AlgPal.domain').Minus = AlgPal.domain.BinaryOperator.extend({

    initialize: function(){
        AlgPal.domain.BinaryOperator.prototype.initialize.call(this);
    }

},
{
    TypeName: 'Minus',
    Symbol: '-',

    Create: function(left, right){
        AlgPal.Assert(AlgPal.IsType(left, AlgPal.domain.Term), 'Left must be a term');
        AlgPal.Assert(AlgPal.IsType(right, AlgPal.domain.Term), 'Right must be a term');

        return new AlgPal.domain.Minus({left: left, right: right, type: AlgPal.domain.Minus.TypeName, symbol: AlgPal.domain.Minus.Symbol});
    }
});
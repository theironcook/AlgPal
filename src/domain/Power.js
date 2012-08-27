
GetContext('AlgPal.domain').Power = AlgPal.domain.BinaryOperator.extend({

    initialize: function(){
        AlgPal.domain.Operator.prototype.initialize.call(this);
    }

},
{
    TypeName: 'Power',
    Symbol: '^',

    Create: function(left, right){
        AlgPal.utils.Assert(AlgPal.utils.IsType(left, AlgPal.domain.Term), 'Left must be a term');
        AlgPal.utils.Assert(AlgPal.utils.IsType(right, AlgPal.domain.Number), 'Right must be a number');

        return new AlgPal.domain.Power({left: left, right: right, type: AlgPal.domain.Power.TypeName, symbol: AlgPal.domain.Power.Symbol});
    }
});

GetContext('AlgPal.domain').Power = AlgPal.domain.BinaryOperator.extend({

    initialize: function(){
        AlgPal.domain.Operator.prototype.initialize.call(this);
    }

},
{
    TypeName: 'Power',
    Symbol: '^',

    Create: function(left, right){
        AlgPal.Assert(AlgPal.IsType(left, AlgPal.domain.Term), 'Left must be a term');
        AlgPal.Assert(AlgPal.IsType(right, AlgPal.domain.Number), 'Right must be a number');

        return new AlgPal.domain.Power({left: left, right: right, type: AlgPal.domain.Power.TypeName, symbol: AlgPal.domain.Power.Symbol});
    }
});
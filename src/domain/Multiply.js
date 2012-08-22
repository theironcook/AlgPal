
GetContext('AlgPal.domain').Multiply = AlgPal.domain.Operator.extend({

    initialize: function(){
        AlgPal.domain.Operator.prototype.initialize.call(this, AlgPal.domain.Multiply.Name);
    }

},
{
    Name: '*'
});
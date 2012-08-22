
GetContext('AlgPal.domain').Plus = AlgPal.domain.Operator.extend({

    initialize: function(){
        AlgPal.domain.Operator.prototype.initialize.call(this, AlgPal.domain.Plus.Name);
    }

},
{
    Name: '+'
});
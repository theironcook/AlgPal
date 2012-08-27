
GetContext('AlgPal.domain').BinaryOperator = AlgPal.domain.Term.extend({

    initialize: function(){
        AlgPal.domain.Operator.prototype.initialize.call(this);
        AlgPal.Assert(this.get('symbol'), 'Symbol must be defined');
    },

    toString: function(){
        return this.get('left').toString() + this.get('symbol') + this.get('right').toString();
    }

});
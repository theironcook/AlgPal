
GetContext('AlgPal.domain').Operator = AlgPal.domain.Term.extend({

    initialize: function(){
        AlgPal.domain.Term.prototype.initialize.call(this);
        AlgPal.utils.Assert(this.get('type'), 'Type must be defined');
    },

    toString: function(){
        return this.get('left').toString() + '+' + this.get('right').toString();
    }

});
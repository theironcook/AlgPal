
GetContext('AlgPal.domain').Operator = AlgPal.domain.Term.extend({

    initialize: function(){
        AlgPal.domain.Term.prototype.initialize.call(this);
    }

});
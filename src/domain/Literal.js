
GetContext('AlgPal.domain').Literal = AlgPal.domain.Term.extend({

    initialize: function(value){
        AlgPal.domain.Term.prototype.initialize.call(this);

        AlgPal.utils.Assert(_.isNumber(value), 'Literal value must be set as a number');
        this.attributes['value'] = value;
    }

});
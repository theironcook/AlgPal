
GetContext('AlgPal.domain').Operator = AlgPal.domain.Term.extend({

    initialize: function(name){
        AlgPal.domain.Term.prototype.initialize.call(this);

        AlgPal.utils.Assert(_.isString(name), 'Operator name must be set as a string');
        this.attributes['name'] = name;
    }

});
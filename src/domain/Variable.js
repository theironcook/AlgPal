
GetContext('AlgPal.domain').Variable = AlgPal.domain.Term.extend({

    initialize: function(name){
        AlgPal.domain.Term.prototype.initialize.call(this);

        AlgPal.utils.Assert(_.isString(name), 'Variable name must be set as a string');
        this.attributes['name'] = name;
    }

});
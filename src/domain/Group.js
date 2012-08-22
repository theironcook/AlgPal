
GetContext('AlgPal.domain').Group = AlgPal.domain.Term.extend({

    initialize: function(term){
        AlgPal.domain.Term.prototype.initialize.call(this);

        AlgPal.utils.Assert(AlgPal.utils.IsType(term, AlgPal.domain.Term), 'Group must have a term');
        this.attributes['term'] = term;
    }

});
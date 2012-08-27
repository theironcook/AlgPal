
GetContext('AlgPal.domain').Group = AlgPal.domain.Term.extend({

    initialize: function(){
        AlgPal.domain.Term.prototype.initialize.call(this);
    },

    toString: function(){
        return '(' + this.get('term').toString() + ')';
    }

},
{
    TypeName: 'Group',

    Create: function(term){
        AlgPal.utils.Assert(AlgPal.utils.IsType(term, AlgPal.domain.Term), 'Group must contain a term');

        return new AlgPal.domain.Group({term: term, type: AlgPal.domain.Group.TypeName});
    }
});

GetContext('AlgPal.domain').Equation = Backbone.Model.extend({

    toString: function(){
        return this.get('left').toString() + '=' + this.get('right').toString();
    }

},
{
    TypeName: 'Equation',

    Create: function(left, right){
        AlgPal.Assert(AlgPal.IsType(left, AlgPal.domain.Term), 'Left must be a term');
        AlgPal.Assert(AlgPal.IsType(right, AlgPal.domain.Term), 'Right must be a term');

        return new AlgPal.domain.Equation({left: left, right: right, type: AlgPal.domain.Equation.TypeName});
    }
});
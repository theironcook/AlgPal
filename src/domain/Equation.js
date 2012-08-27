
GetContext('AlgPal.domain').Equation = Backbone.Model.extend({


},
{
    TypeName: 'Equation',

    Create: function(left, right){
        AlgPal.utils.Assert(AlgPal.utils.IsType(left, AlgPal.domain.Term), 'Left must be a term');
        AlgPal.utils.Assert(AlgPal.utils.IsType(right, AlgPal.domain.Term), 'Right must be a term');

        return new AlgPal.domain.Equation({left: left, right: right, type: AlgPal.domain.Equation.TypeName});
    }
});
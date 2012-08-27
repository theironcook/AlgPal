

GetContext('AlgPal.parser').StringToEquation = function(string) {
    var equation;

    AlgPal.utils.Assert(_.isString(string), 'Must pass a string');
    equation = algpal.parse(string);
    AlgPal.utils.Assert(AlgPal.utils.IsType(equation, AlgPal.domain.Equation), 'Must parse to an equation');
    return equation;
};


GetContext('AlgPal.parser').EquationToString = function(equation) {
    var string;

    AlgPal.utils.Assert(AlgPal.utils.IsType(equation, AlgPal.domain.Equation), 'Must pass an equation');
    string = equation.toString();

    return string;
};


GetContext('AlgPal').StringToEquation = function(string) {
    var equation;

    AlgPal.Assert(_.isString(string), 'Must pass a string');
    equation = algpal.parse(string);
    AlgPal.Assert(AlgPal.IsType(equation, AlgPal.domain.Equation), 'Must parse to an equation');
    return equation;
};


GetContext('AlgPal').EquationToString = function(equation) {
    var string;

    AlgPal.Assert(AlgPal.IsType(equation, AlgPal.domain.Equation), 'Must pass an equation');
    string = equation.toString();

    return string;
};
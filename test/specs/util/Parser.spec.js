describe("parser", function(){
    beforeEach(function(){

    });

    describe("Basic reflexive conversion", function(){
        it("basic functions", function(){
            var equationStrings = [
                '3*x+5=17',
                '3*x=12',
                '2/(x-4)+x/(x+1)=1',
                '(2/(x-4))*((x+1)/(x+1))+(x/(x+1))*((x-4)/(x-4))=1',
                '(2*(x+1)+x*(x-4))/((x+1)*(x-4))=1',
                '(2*x+2+x^2-4*x)/((x+1)*(x-4))=1',
                '(x^2-2*x+2)/((x+1)*(x-4))=1',
                '3*x+3=x-5',
//                '4*x-2=-x',
                '4*x+2+3*x-2*x=12',
                '3*x-3-x-4*x=5*x+12-2*x',
                '(2+x)/x=2/x',
                '((2+3*x)*(x-1))/(2+3*x)=1',
                'x*(x-6)/(2*x)=1',
                '((5*x+16)*(2*x+7))/6*(2*x+7)=1'
            ];

            _.each(equationStrings, function(equationString){
                var equation = AlgPal.StringToEquation(equationString);
                var convertedString = AlgPal.EquationToString(equation);
                expect(equationString).toBe(convertedString);
            })
        });
    });

});
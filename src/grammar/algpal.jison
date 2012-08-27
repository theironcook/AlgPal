
/* description: Parses end executes mathematical expressions. */

/* lexical grammar */
%lex
%%

\s+                   /* skip whitespace */
[0-9]+("."[0-9]+)?\b  return 'NUMBER'
"*"                   return '*'
"/"                   return '/'
"-"                   return '-'
"+"                   return '+'
"^"                   return '^'
"!"                   return '!'
"%"                   return '%'
"("                   return '('
")"                   return ')'
"PI"                  return 'PI'
"E"                   return 'E'
[a-zA-Z]+             return 'VAR'
"="                   return '='
<<EOF>>               return 'EOF'
.                     return 'INVALID'

/lex

/* operator associations and precedence */

%left '='
%left '+' '-'
%left '*' '/'
%left '^'
%right '!'
%right '%'
%left UMINUS

%start expressions

%% /* language grammar */

expressions
    : e EOF
        { typeof console !== 'undefined' ? console.log($1) : print($1);
          return $1; }
    ;

e
    : e '=' e
        {$$ = AlgPal.domain.Equation.Create($1, $3);}
    | e '+' e
        {$$ = AlgPal.domain.Plus.Create($1, $3);}
    | e '-' e
        {$$ = AlgPal.domain.Minus.Create($1, $3);}
    | e '*' e
        {$$ = AlgPal.domain.Multiply.Create($1, $3);}
    | e '/' e
        {$$ = AlgPal.domain.Divide.Create($1, $3);}
    | e '^' e
        {$$ = AlgPal.domain.Power.Create($1, $3);}
    | e '!'
        {{
          $$ = (function fact (n) { return n==0 ? 1 : fact(n-1) * n })($1);
        }}
    | e '%'
        {$$ = $1/100;}
    | '-' e %prec UMINUS
        {$$ = -$2;}
    | '(' e ')'
        {$$ = AlgPal.domain.Group.Create($2);}
    | NUMBER
        {$$ = AlgPal.domain.Number.Create(yytext);}
    | E
        {$$ = Math.E;}
    | PI
        {$$ = Math.PI;}
    | VAR
        {$$ = AlgPal.domain.Variable.Create(yytext);}
    ;


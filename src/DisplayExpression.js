var floor = require( 'math-floor' );
var abs = require( 'math-abs' );

export const displayExpression = (expression, side, isShowSign, isUnpack, isHelper, level='easy') => {
    var tasks = []
    var factors_exp = []
    // console.log(level)
    var isFraction = level == 'easy' 
    expression.terms.forEach((t,index) => {
        // console.log(t)
        var fac = calculateFactors(t.coefficients[0].numer)
        factors_exp = factors_exp.concat(fac)
        var isStart  = index === 0
        var isPositive = t.coefficients[0] > 0
        // var helper = isHelper ? coeff + t.variables[0].variable : coeff+ t.variables[0].variable :
        
        // checkss if coefficient is equal to one
        var isOne = t.coefficients[0].numer === 1
        // if coefficient is equal to one then don't show it in helper mode 
        var coeff = isOne ? "" : t.coefficients[0].numer
       
        // if unpack then add the \times to the equation so they can see constant being times
        var unpack = isUnpack ?  t.coefficients[0].numer + "\\times "   +  t.variables[0].variable : t.coefficients[0].numer +  t.variables[0].variable

        // if show sign add the signs 
        var contentHelper = isShowSign &&  isPositive ? "+" + unpack : unpack 

        // if no helper mode then just add signs to second 
        var content_NonHelper = !isStart && isPositive ? "+" +  coeff + t.variables[0].variable : coeff+ t.variables[0].variable

        // sets what the content looks like 
        var helper = isHelper ? contentHelper : content_NonHelper

        var number = isFraction ? helper : `\\frac{${helper}}{${t.coefficients[0].denom}}` //"\\frac{$`helper`}{}"

        tasks.push({
            id: `${side}-variable-x${index}`, 
            // content:!isStart && isPositive ? "+" +  t.coefficients[0].numer + t.variables[0].variable : t.coefficients[0].numer + t.variables[0].variable,
            // content:!isStart && isPositive ? "+" +  coeff + t.variables[0].variable : coeff+ t.variables[0].variable,  
            // content: helper,
            content: number,
            exp: t 
        });  
    }); 
        
        var factors_const = []
        expression.constants.forEach((c,index) => {
            console.log(c)
            var fac = calculateFactors(c.numer)
            factors_const = factors_const.concat(fac)
            var hasTerm = tasks.length !== 0  && index === 0
            var isStart  = index === 0
            var isPositive = c.numer > 0
            // if helper mode add signs to everything 
            var contentHelper = isPositive ? "+" + c.numer : c.numer

            // if not helper  then only show it at certain times 
            var content_NonHelper = isPositive && (!isStart || hasTerm) ? "+" + c.numer : c.numer

            // set content of what it should look like 
            var helper = isShowSign && isHelper ? contentHelper : content_NonHelper
            var number = isFraction ? helper : `\\frac{${helper}}{${c.denom}}`
            tasks.push({
                id: `${side}-num-${index}`, 
                // content: (!isStart && isPositive) || (isStart && hasTerm && isPositive) ? "+" + c.numer : c.numer,
                // content: isPositive && (!isStart || hasTerm) ? "+" + c.numer : c.numer,  
                content: number,
                exp: c
            });         

        }); 

        var factors;
        // console.log(side)
        // console.log(factors_exp)
        // console.log(factors_const)

        // console.log(expression.terms.length)

        if(expression.terms.length === 0 ){
            // console.log('hello')
            factors = factors_const
          
        
        } else if (expression.constants.length === 0 ){
            factors = factors_exp
        } else {
            // factors = factors_exp
            var factor_exp = new Set(factors_exp)
            var factor_const = new Set(factors_const)
            factors = new Set(
                [...factor_exp].filter(x => factor_const.has(x)));
        }


        // console.log(factors)

        return [tasks, factors];
        
    }

function calculateFactors(integer) {
    var inte = abs(integer)
    var factors = [],
    quotient = 0;
  
    for(var i = 1; i <= inte; i++){
      quotient = inte/i;
  
      if(quotient === floor(quotient)){
        factors.push(i); 
      }
    }
    // console.log(integer)
    // console.log(factors)
    return factors;
    
}
export const displayExpression = (expression, side, isShowSign, isUnpack, isHelper) => {
    var tasks = []
    expression.terms.forEach((t,index) => {
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

        tasks.push({
            id: `${side}-variable-x${index}`, 
            // content:!isStart && isPositive ? "+" +  t.coefficients[0].numer + t.variables[0].variable : t.coefficients[0].numer + t.variables[0].variable,
            // content:!isStart && isPositive ? "+" +  coeff + t.variables[0].variable : coeff+ t.variables[0].variable,  
            content: helper,
            exp: t 
        });  
    }); 

        expression.constants.forEach((c,index) => {
            var hasTerm = tasks.length !== 0  && index === 0
            var isStart  = index === 0
            var isPositive = c.numer > 0
            // if helper mode add signs to everything 
            var contentHelper = isPositive ? "+" + c.numer : c.numer

            // if not helper  then only show it at certain times 
            var content_NonHelper = isPositive && (!isStart || hasTerm) ? "+" + c.numer : c.numer

            // set content of what it should look like 
            var helper = isShowSign && isHelper ? contentHelper : content_NonHelper
            tasks.push({
                id: `${side}-num-${index}`, 
                // content: (!isStart && isPositive) || (isStart && hasTerm && isPositive) ? "+" + c.numer : c.numer,
                // content: isPositive && (!isStart || hasTerm) ? "+" + c.numer : c.numer,  
                content: helper,
                exp: c
            });         

        }); 
        return tasks;
        
    }
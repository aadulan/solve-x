export const displayExpression = (expression, side, isShowSign, isUnpack, isHelper) => {
    var tasks = []
    expression.terms.forEach((t,index) => {
        var isStart  = index === 0
        var isPositive = t.coefficients[0] > 0
        // var helper = isHelper ? coeff + t.variables[0].variable : coeff+ t.variables[0].variable :
        var isOne = t.coefficients[0].numer === 1
        var coeff = isOne ? "" : t.coefficients[0].numer
        var unpack = isUnpack ?  t.coefficients[0].numer + "\\times "   +  t.variables[0].variable : t.coefficients[0].numer +  t.variables[0].variable
        var contentHelper = isShowSign &&  isPositive ? "+" + unpack : unpack 
        var content_NonHelper = !isStart && isPositive ? "+" +  coeff + t.variables[0].variable : coeff+ t.variables[0].variable
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
            var contentHelper = isPositive ? "+" + c.numer : c.numer
            var content_NonHelper = isPositive && (!isStart || hasTerm) ? "+" + c.numer : c.numer
            var helper = isHelper ? contentHelper : content_NonHelper
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
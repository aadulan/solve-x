export const displayExpression = (expression, side) => {
    var tasks = []
    expression.terms.forEach((t,index) => {
        var isStart  = index === 0
        var isPositive = t.coefficients[0] > 0
        tasks.push({
            id: `${side}-variable-x${index}`, 
            content:!isStart && isPositive ? "+" +  t.coefficients[0].numer + t.variables[0].variable : t.coefficients[0].numer + t.variables[0].variable, 
            exp: t 
        });  
    }); 

        expression.constants.forEach((c,index) => {
            var hasTerm = tasks.length !== 0  && index === 0
            var isStart  = index === 0
            var isPositive = c.numer > 0
            tasks.push({
                id: `${side}-num-${index}`, 
                // content: (!isStart && isPositive) || (isStart && hasTerm && isPositive) ? "+" + c.numer : c.numer,
                content: isPositive && (!isStart || hasTerm) ? "+" + c.numer : c.numer,  
                exp: c
            });         

        }); 
        return tasks;
        
    }
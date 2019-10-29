export const displayExpression = (expression, side) => {
    var tasks = []
    
    expression.terms.forEach(t => {
        tasks.push({
            id: `${side}-variable-${t.variables[0].variable}`, 
            content: t.coefficients[0].numer + t.variables[0].variable, 
            exp: t 
        });            
    }); 
        expression.constants.forEach((c,index) => {
            var isStart  = index === 0
            tasks.push({
                id: `${side}-num-${c.numer}`, 
                content:isStart ? c.numer : "+" + c.numer, 
                exp: c
            });            

        }); 
        return tasks;
        
    }
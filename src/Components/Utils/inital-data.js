// const initalData = {
//     equation : '2 * x - 5 = 5',
//     // tasks: [
//     //     { id: 'task-2', content: '2 * x' },
//     //     { id: 'task-4', content: '- 5' },
//     //     { id: 'task-5', content: '=' },
//     //     { id: 'task-6', content: '5' },
//     // ],
// };

// export default initalData;

const randRange = (min, max) => (
    Math.floor(Math.random() * (max - min + 1)) + min
)

export const equationGen = name => {
    const answer = Math.ceil(Math.random() * 10);
    const randomFrac = Math.ceil(Math.random() * 10) + 1 // between 2 and 11
    const randomNumber = randRange(2, 11);
    const constant = answer * randomNumber;
    const splitConstant = randRange(2,constant);
    const splitTerm = randRange(2,randomNumber-1);

  
    
     if( name === "level1" ){
        if (Math.random() >= 0.5){
            return `${randomNumber + splitTerm} * x +${splitConstant} = ${splitTerm} * x + ${constant+splitConstant}`
        }else{
            return `${randomNumber} * x +${splitConstant} = ${constant+splitConstant}`
        }
    } else if (name === "level2"){
        if (Math.random() >= 0.5){
            return `-${randomNumber + splitTerm} * x +${splitConstant} = -${splitTerm} * x + ${constant+splitConstant}`
        }else{
            return `${-randomNumber} * x -${splitConstant} = ${constant-splitConstant}`
        }

    } else if ( name === "level3"){
        if (Math.random() >= 0.5){
            return `${randomNumber + splitTerm} * x /${randomFrac} +${splitConstant} = ${splitTerm} * x + ${constant+splitConstant}`
        }else{
            return `${randomNumber} * x/${randomFrac} +${splitConstant} = ${constant+splitConstant}`
        }
    } else if (name === "level4"){
        if (Math.random() >= 0.5){
            return `-${randomNumber + splitTerm} * x/${randomFrac} = -${splitTerm} * x + ${constant}`
        }else{
            return `${-randomNumber} * x/${randomFrac} -${splitConstant} = ${constant-splitConstant}`
        }
    }
    else if (name === "level5"){
        if (Math.random() >= 0.5){
            return `-${randomNumber + splitTerm} * x/${randomFrac} = -${splitTerm} * x + ${constant}`
        }else{
            return `${-randomNumber} * x/${randomFrac} -${splitConstant} = ${constant-splitConstant}`
        }
    }
        
    // const square = randomNumber * randomNumber
    // const randomInput = Math.ceil(Math.random() * 10)
    // const input = square - randomInput


}




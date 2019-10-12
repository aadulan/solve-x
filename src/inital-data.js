const initalData = {
    equation : '2 * x - 5 = 5',
    // tasks: [
    //     { id: 'task-2', content: '2 * x' },
    //     { id: 'task-4', content: '- 5' },
    //     { id: 'task-5', content: '=' },
    //     { id: 'task-6', content: '5' },
    // ],
};

export default initalData;

export const equationGen = () => {
    const randomNumber = Math.ceil(Math.random() * 10) 
    const square = randomNumber * randomNumber
    const randomInput = Math.ceil(Math.random() * 10)
    const input = square - randomInput

    return `${randomNumber} * x -${input} = ${randomInput}`

}


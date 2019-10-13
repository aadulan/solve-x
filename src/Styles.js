import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    card: {
        border: 1, 
        borderStyle: 'solid', 
        padding: 10, 
        margin: 10, 
        minwidth: 200,
    },
    userSelect: {
        userSelect:'none'
    },
    eqSpaceCard: {
        padding: 20, 
        maxWidth: 1000, 
        borderStyle: 'solid', 
        borderWidth: 1, 
        backgroundColor: '#e3f2fd',
    },
    drop: {
        display: 'flex',
        flexDirection: 'row',
    }

})
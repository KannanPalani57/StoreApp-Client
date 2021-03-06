import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            height: '5vh',
            width: '25vw',
            marginLeft: '10px'
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
        },
        iconButton: {
            padding: 10,
            fontSize: 'small',

        },
        divider: {
            height: 28,
            margin: 4,
        },
    }),
);

export default function Search() {
    const classes = useStyles();

    return (
        <Paper component="form" className={classes.root}>

            <InputBase
                className={classes.input}
                placeholder="Search Products here.."
                inputProps={{ 'aria-label': 'Search Products here' }}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>

        </Paper>
    );
}
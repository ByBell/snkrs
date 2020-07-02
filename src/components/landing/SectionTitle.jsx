import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles({
    sectionTitle: {
        textAlign: 'center',
        marginBottom: '30px'
    },
    span: {
        fontSize: '16px',
        textTransform: 'uppercase',
        color: '#C7C7C7'
    },
    h2: {
        marginTop: '10px'
    }
});

/**
 * SectionTitle component
 * @param {Object} 
 */
const SectionTitle = ({title, subtitle}) => {

    const classes = useStyles();

    return (
        <div className={classes.sectionTitle}>
            <span className={classes.span}>{subtitle}</span>
            <Typography variant="h2" className={classes.h2}>{title}</Typography>
        </div>
    )
}

export default SectionTitle;
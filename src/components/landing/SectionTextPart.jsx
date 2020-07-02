import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles({
    sectionTextPart: {
        textAlign: 'left'
    },
    icon: {
        width: '80px',
        height: '80px',
        padding: '20px',
        boxSizing: 'border-box',
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.08)',
        borderRadius: '25px'
    },
    h3: {
        margin: "30px 0"
    },
    span: {
        fontSize: '16px',
        textTransform: 'uppercase',
        color: '#C7C7C7'
    }
});

/**
 * SectionPart component
 * @param {Object} 
 */
const SectionTextPart = ({icon, title, children}) => {

    const classes = useStyles();

    return (
        <div className={classes.sectionTextPart}>
            <img className={classes.icon} src={icon}/>
            <Typography variant="h3" className={classes.h3}>{title}</Typography>
            <Typography>{children}</Typography>
        </div>
    );
}

export default SectionTextPart;
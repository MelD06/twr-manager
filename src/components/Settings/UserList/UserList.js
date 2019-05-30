import React from 'react';
import {Paper, Typography, Grid, Button} from '@material-ui/core';

const UserList = (props) => {
    return (<Paper>
            <Typography element="h4" >Gestion Utilisateurs</Typography>
            {props.users.map((user) => (<Paper>
            <Grid container spacing={4}>
            <Grid cell xs={6}>
                {user.displayName ? user.displayName : 'Sans Nom'}
            </Grid>
            <Grid cell xs={6}>
            {user.email}
            </Grid>
            <Grid cell xs={6}>
            Derniere connexion : {user.metadata.lastSignInTime}
            </Grid>
            <Grid cell xs={6}>
            Droits Administateur {user.customClaims ? (user.customClaims.admin ? 'Oui' : 'Non') : 'Inconnu'}<br />
            <Button onClick={props.onSwitchAdmin} id={user.uid}>Changer</Button>
            </Grid>
            
            </Grid>
            
            </Paper>))}
    </Paper>);
}

export default UserList;
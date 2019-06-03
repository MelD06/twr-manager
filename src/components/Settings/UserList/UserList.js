import React from 'react';
import {Paper, Typography, Grid, Button, Table, TableHead, TableRow, TableBody, TableCell, Switch} from '@material-ui/core';
import MetaSelector from '../../../components/UI/Menu/MetaSelector/MetaSelector';
// import MaterialTable from 'material-table';

const UserList = (props) => {
    return (<Paper>
            <Typography element="h4" >Gestion Utilisateurs</Typography>
            <Table>
              <TableHead>
                  <TableRow>
                    <TableCell>Utilisateur</TableCell>
                    <TableCell>Derniere Connexion</TableCell>
                    <TableCell>Administateur</TableCell>
                    <TableCell>Statut</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                {props.users.map((user) => (
                  <TableRow>
                    <TableCell>{user.displayName}</TableCell>
                    <TableCell>{new Date(user.metadata.lastSignInTime).toString()}</TableCell>
                    <TableCell><Switch checked={user.customClaims.admin} onChange={props.onSwitchAdmin} value={user.customClaims.admin} name={user.uid} /></TableCell>
                  </TableRow>
                ))}
              </TableBody>

            </Table>

            {/* // {props.users.map((user) => (<Paper>
            // <Grid container spacing={4}>
            // <Grid cell xs={6}>
            // <Typography element="p">
            //     {user.displayName ? user.displayName : 'Sans Nom'}<br />
            // Derniere connexion : {user.metadata.lastSignInTime}
            // </Typography>
            // </Grid>
            // <Grid cell xs={6}>
            // {user.email}
            // </Grid>
            // <Grid cell xs={6}>
            // Droits Administateur {user.customClaims ? (user.customClaims.admin ? 'Oui' : 'Non') : 'Inconnu'}<br />
            // <Button onClick={props.onSwitchAdmin} id={user.uid}>Changer</Button>
            // </Grid>
            // <Grid cell xs={6}>
            
            // Statut {user.customClaims ? <MetaSelector choicesValues={['student', 'instructor', 'admin']} choicesNames={['étudiant', 'Instructeur', 'Administateur']} selection={user.customClaims.role} type="role" />: 'Inconnu'}<br />
            // <Button onClick={props.onSwitchAdmin} id={user.uid}>Changer</Button>
            // </Grid>
            // </Grid>
            
            // </Paper>))} */}
    </Paper>);
}

export default UserList;
import React from 'react';
import {Paper, Typography, Table, TableHead, TableRow, TableBody, TableCell} from '@material-ui/core';
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
                    <TableCell>Statut</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                {props.users.map((user) => (
                  <TableRow key={user.email}>
                    <TableCell>{user.displayName}</TableCell>
                    <TableCell>{new Date(user.metadata.lastSignInTime).toString()}</TableCell>
                    <TableCell><MetaSelector choices={props.statuses} choicesNames={props.statuses.map(el => el[1])} selection={user.customClaims.role} name={user.uid} change={props.onChangeRole} /></TableCell>
                  </TableRow>
                ))}
              </TableBody>

            </Table>
    </Paper>);
}

export default UserList;
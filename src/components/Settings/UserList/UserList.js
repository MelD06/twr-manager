import React from 'react';
import {Paper, Typography, Grid, Button, Table} from '@material-ui/core';
import MetaSelector from '../../../components/UI/Menu/MetaSelector/MetaSelector';
// import MaterialTable from 'material-table';

const UserList = (props) => {
    return (<Paper>
            <Typography element="h4" >Gestion Utilisateurs</Typography>
            {/* <MaterialTable
          columns={[
            { title: "Adı", field: "name" },
            { title: "Doğum Yılı", field: "birthYear", type: "numeric" },
            {
              title: "Doğum Yeri",
              field: "birthCity",
              lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
            }
          ]}
          data={[
            { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 }
          ]}
          title="Demo Title"
        /> */}
            {props.users.map((user) => (<Paper>
            <Grid container spacing={4}>
            <Grid cell xs={6}>
            <Typography element="p">
                {user.displayName ? user.displayName : 'Sans Nom'}<br />
            Derniere connexion : {user.metadata.lastSignInTime}
            </Typography>
            </Grid>
            <Grid cell xs={6}>
            {user.email}
            </Grid>
            <Grid cell xs={6}>
            Droits Administateur {user.customClaims ? (user.customClaims.admin ? 'Oui' : 'Non') : 'Inconnu'}<br />
            <Button onClick={props.onSwitchAdmin} id={user.uid}>Changer</Button>
            </Grid>
            <Grid cell xs={6}>
            
            Statut {user.customClaims ? <MetaSelector choicesValues={['student', 'instructor', 'admin']} choicesNames={['étudiant', 'Instructeur', 'Administateur']} selection={user.customClaims.role} type="role" />: 'Inconnu'}<br />
            <Button onClick={props.onSwitchAdmin} id={user.uid}>Changer</Button>
            </Grid>
            </Grid>
            
            </Paper>))}
    </Paper>);
}

export default UserList;
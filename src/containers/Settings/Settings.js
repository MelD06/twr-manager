import React, { Component } from 'react';
import {Paper, Typography} from '@material-ui/core';

import "firebase/firestore";
import "firebase/functions";
import Firebase from "../../firestore-instance";
import UserList from '../../components/Settings/UserList/UserList';

class Settings extends Component {
    state = {
        users: []
    }

    componentDidMount() {

       const usersGet = Firebase.functions().httpsCallable('getAllUsers');
       usersGet({page: '1'}).then(res => this.setState({users: Object.values(res.data)}))   

       
    }

    onSwitchUserAdmin (event) {
        console.log(event.target.offsetParent.id) // Shite
    }

    render(){
        console.log(this.state.users)

        return (
            <React.Fragment>
            <Typography>Parametres utilisateurs</Typography>
            <Paper><UserList users={this.state.users} onSwitchAdmin={(event) => this.onSwitchUserAdmin(event)} /></Paper>
            </React.Fragment>
        )
    }

}

export default Settings;
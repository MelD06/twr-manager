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

    updateUserState () {
        const usersGet = Firebase.functions().httpsCallable('getAllUsers');
        usersGet({page: '0'}).then(res => this.setState({users: Object.values(res.data)}))   
        
    }

    componentDidMount() {

        this.updateUserState();
       
    }

    onSwitchUserAdmin (event) {
       const changeAdmin = Firebase.functions().httpsCallable('changeUserAdminStatus');
       changeAdmin({userId: event.target.offsetParent.id, newRole: 'student', newAdminStatus: false}).then(res => console.log(res)) // Shite call
        this.updateUserState();
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
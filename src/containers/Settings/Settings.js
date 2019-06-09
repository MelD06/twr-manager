import React, { Component } from "react";
import { Paper, Typography } from "@material-ui/core";

import "firebase/firestore";
import "firebase/functions";
import Firebase from "../../firestore-instance";
import UserList from "../../components/Settings/UserList/UserList";
// import Spinner from "../../components/UI/Spinner/Spinner";
// import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const statuses = [
  ["student", "étudiant"],
  ["instructor", "Instructeur"],
  ["admin", "Administrateur"]
];

class Settings extends Component {
  state = {
    users: [],
    userRole: ''
  };

  updateUserState() {
    const usersGet = Firebase.functions().httpsCallable("getAllUsers");
    usersGet({ page: "0" }).then(res =>
      this.setState({ users: Object.values(res.data) })
    );
  }

  componentDidMount() {
    Firebase.auth().currentUser.getIdTokenResult().then(user => {
      this.setState({userRole: user.claims.role});
      if(user.claims.role === 'admin'){
        this.updateUserState();
      }
    })
  }

  onSwitchUserSettings(event, isRole) {
    const changeAdmin = Firebase.functions().httpsCallable(
      "changeUserAdminStatus"
    );
    let newStatus = false;
    let newRole = "";
    let userDataset = {};
    let newClaims = {};
    const newUsers = this.state.users.map(user => {
      if (user.uid === event.target.name) {
        userDataset = { ...user };
        newStatus = user.customClaims.admin;
        newRole = user.customClaims.role;
        if (isRole) {
          newRole = event.target.value;
        } else {
          newStatus = !user.customClaims.admin;
        }
        newClaims = {
          admin: newStatus,
          role: newRole
        };
        userDataset.customClaims = newClaims;
        return userDataset;
      } else {
        return user;
      }
    });

    changeAdmin({
      userId: event.target.name,
      newRole: newRole,
      newAdminStatus: newStatus
    }).then(res => this.setState({ users: newUsers })).catch((err) => console.log(err));
  }

  render() {
    let list = null;
    if (this.state.users !== [] && this.state.userRole === 'admin') {
      list = (
        <Paper>
        <UserList
          statuses={statuses}
          users={this.state.users}
          onSwitchAdmin={event => this.onSwitchUserSettings(event, false)}
          onChangeRole={event => this.onSwitchUserSettings(event, true)}
        />
        </Paper>
      );
    }
    return (
      <React.Fragment>
        <Typography>Parametres utilisateurs</Typography>
          {list}
      </React.Fragment>
    );
  }
}

export default Settings;

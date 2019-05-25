import React from "react";
import { Dialog, DialogTitle, Button, DialogActions } from "@material-ui/core";

const DeleteDialog = props =>
  <Dialog onClose={props.cancelDelete} open>
    <DialogTitle id="simple-dialog-title">
      Voulez vous-vraiment supprimer {props.what} ?
    </DialogTitle>
    <DialogActions>
      <Button variant="outlined" color="primary" onClick={props.cancelDelete}>
        Annuler
      </Button>
      <Button variant="contained" color="secondary" onClick={props.doDelete}>
        supprimer
      </Button>
    </DialogActions>
  </Dialog>;

export default DeleteDialog;

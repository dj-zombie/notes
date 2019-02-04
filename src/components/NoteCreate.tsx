import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withStyles from '@material-ui/core/styles/withStyles';
import NewNoteForm from './NewNoteForm';

export default class FormDialog extends React.Component<{ edit: any }, {}> {
  public state = {
    open: false,
  };

  public handleClickOpen = () => {
    this.setState({ open: true });
  };

  public handleClose = () => {
    this.setState({ open: false });
  };

  public handleEdit = () => {
    this.setState({ open: false });
    this.props.edit();
  };

  public render() {
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
          style={{ marginBottom: '1rem' }}
        >
          New
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create a new Note</DialogTitle>
          <DialogContent>
            <DialogContentText>Add a new note...</DialogContentText>
            <NewNoteForm />
            <TextField
              autoFocus={true}
              margin="dense"
              id="note"
              label="Note"
              type="text1"
              fullWidth={true}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleEdit} color="primary">
              Add Note
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

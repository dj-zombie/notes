import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withStyles from '@material-ui/core/styles/withStyles';

export default class FormDialog extends React.Component<{ edit: any }, {}> {
  public state = {
    open: false,
    note: '',
    title: '',
  };

  public constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleClickOpen = () => {
    this.setState({ open: true });
  };

  public handleClose = () => {
    this.setState({ open: false });
  };

  public handleSubmit = (event: any) => {
    event.preventDefault();
    this.setState({ open: false, title: '', note: '' });
    this.props.edit(this.state.title, this.state.note);
  };

  public handleChange(event: any) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  public render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
          style={{ marginBottom: '1rem' }}
        >
          New Note
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create a new Note</DialogTitle>
          <DialogContent>
            <DialogContentText>Add a new note...</DialogContentText>
            <TextField
              multiline={true}
              autoFocus={true}
              rowsMax="4"
              margin="normal"
              label="Title"
              type="text1"
              name="title"
              fullWidth={true}
              value={this.state.title}
              onChange={this.handleChange}
            />
            <TextField
              multiline={true}
              rowsMax="10"
              rows="7"
              margin="normal"
              label="Note"
              type="text1"
              name="note"
              fullWidth={true}
              value={this.state.note}
              onChange={this.handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Add Note
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    );
  }
}

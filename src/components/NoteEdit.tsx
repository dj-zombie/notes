import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

const styles = (theme: any) => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class NoteEdit extends React.Component<
  { edit: any; classes: any; title: string; note: string; index: number },
  {}
> {
  public state = {
    open: false,
    note: this.props.note,
    title: this.props.title,
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

  public handleEdit = () => {
    this.setState({ open: false });
    this.props.edit();
  };

  public handleSubmit = (event: any) => {
    event.preventDefault();
    this.setState({ open: false, title: '', note: '' });
    this.props.edit(this.state.title, this.state.note, this.props.index);
  };

  public handleChange(event: any) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  public render() {
    const { classes } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <IconButton onClick={this.handleClickOpen} className={classes.button} aria-label="Delete">
          <EditIcon />
        </IconButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Editing Note</DialogTitle>
          <DialogContent>
            <DialogContentText>Edit Note</DialogContentText>
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
              Edit Note
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    );
  }
}

export default withStyles(styles)(NoteEdit);

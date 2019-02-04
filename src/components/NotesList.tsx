import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import NoteIcon from '@material-ui/icons/Note';
import NotesIcon from '@material-ui/icons/Notes';
import DraftsIcon from '@material-ui/icons/Drafts';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = (theme: any) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  input: {
    width: '100%',
  },
});

function ListItemLink(props: any) {
  return <ListItem button={true} component="a" {...props} />;
}

function SimpleList(props: any) {
  const { classes, notes, create } = props;
  const add = () => {
    alert('add');
  };
  const note = notes.map((note: any) => (
    <ListItem button={true}>
      <ListItemIcon>
        <NoteIcon />
      </ListItemIcon>
      <ListItemText primary={note.title} />
    </ListItem>
  ));
  return (
    <div className={classes.root}>
      <ListItem button={true}>
        <ListItemText primary="My Notes" />
      </ListItem>
      <Divider />
      <List component="nav">{note}</List>
    </div>
  );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired,
  notes: PropTypes.array.isRequired,
  create: PropTypes.func.isRequired,
};

export default withStyles(styles)(SimpleList);

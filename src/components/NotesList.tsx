import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import NoteIcon from '@material-ui/icons/Note';
import Note from './Note';
import MenuItem from '@material-ui/core/MenuItem';
import NoteEdit from './NoteEdit';

const styles = (theme: any) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  input: {
    width: '100%',
  },
  button: {
    margin: theme.spacing.unit,
  },
  title: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
});

interface IProps {
  classes: any;
  notes: any;
  create: any;
  edit: any;
}

class SimpleList extends React.Component<IProps, {}> {
  public state = { selected: 0 };

  constructor(props: any) {
    super(props);
  }

  public updateSelected(selectedIndex: number) {
    this.setState({ selected: selectedIndex });
  }

  public render() {
    const { classes, notes, create, edit } = this.props;
    const { selected } = this.state;
    const note = notes.map((noteData: any, index: number) => (
      <MenuItem
        button={true}
        key={index}
        onClick={() => this.updateSelected(index)}
        selected={selected === index}
      >
        <ListItemIcon>
          <NoteIcon />
        </ListItemIcon>
        <ListItemText className={classes.title} primary={noteData.title} />
        <NoteEdit title={noteData.title} note={noteData.note} edit={edit} index={index} />
      </MenuItem>
    ));
    return (
      <div className={classes.root}>
        <ListItem button={false}>
          <ListItemText primary="My Notes" />
        </ListItem>
        <Divider />
        <List component="nav">{note}</List>
        <Note note={notes[selected]} />
      </div>
    );
  }
}

export default withStyles(styles)(SimpleList);

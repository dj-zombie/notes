import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import React, { Component } from 'react';
import 'react-app-polyfill/ie11';
import 'typeface-roboto';
import ButtonAppBar from './components/ButtonAppBar';
import NotesList from './components/NotesList';
import withStyles from '@material-ui/core/styles/withStyles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import Input from '@material-ui/core/Input';
import Note from './components/Note';
import NoteCreate from './components/NoteCreate';

const styles = (theme: any) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    input: {
      width: '100%',
    },
  },
});

class App extends Component<{ classes: any }, { notes: Array<any> }> {
  constructor(props: any) {
    super(props);
    this.state = {
      notes: [
        { title: 'note1', note: 'this is my note' },
        { title: 'note2', note: 'this is another note' },
        { title: 'note3', note: 'last note' },
      ],
    };
    this.addNote = this.addNote.bind(this);
    this.editNote = this.editNote.bind(this);
  }

  public addNote() {
    alert('add note');
    this.setState(previousState => ({
      notes: [...previousState.notes, 'new value'],
    }));
  }

  public editNote(note: object) {
    const newArray = this.state.notes.slice();
    newArray.push({ title: 'note   999', note: 'this is my sic note' });
    this.setState({ notes: newArray });
  }

  public render() {
    const { classes } = this.props;
    const { notes } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <ButtonAppBar />
        <main className={classes.layout}>
          <div>
            <NoteCreate edit={this.editNote} />
          </div>
          <NotesList notes={notes} create={this.addNote} />
          <Note note={notes[0]} />
        </main>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);

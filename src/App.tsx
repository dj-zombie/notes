import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import React, { Component } from 'react';
import 'react-app-polyfill/ie11';
import 'typeface-roboto';
import ButtonAppBar from './components/ButtonAppBar';
import NotesList from './components/NotesList';
import withStyles from '@material-ui/core/styles/withStyles';
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
  },
});

class App extends Component<{ classes: any }, { notes: any[] }> {
  constructor(props: any) {
    super(props);
    this.state = {
      notes: [
        {
          title: 'Computer Security is FUN',
          note: `This is a test for XSS...\n\n';alert(String.fromCharCode(88,83,83))//';alert(String.fromCharCode(88,83,83))`,
        },
        {
          title: 'JSX escaping test',
          note: '<a onmouseover="alert(document.cookie)">xxs link</a>',
        },
        { title: 'OWASP', note: 'Stay up to date with\nhttps://www.owasp.org\nAND THE TOP 10!' },
      ],
    };
    this.addNote = this.addNote.bind(this);
    this.editNote = this.editNote.bind(this);
  }

  public componentDidMount() {
    fetch('/');
  }

  public addNote(title: string, note: string) {
    const newArray = this.state.notes.slice();
    newArray.push({ title, note });
    this.setState({ notes: newArray });
  }

  public editNote(title: string, note: string, id: number) {
    const newArray = this.state.notes.slice();
    newArray[id].title = title;
    newArray[id].note = note;
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
          <NoteCreate edit={this.addNote} />
          <NotesList notes={notes} edit={this.editNote} create={this.addNote} />
        </main>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);

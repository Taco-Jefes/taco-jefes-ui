import './App.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeamCounts from './components/TeamCounts';
import TacoTalk from './components/TacoTalk';
import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { tacoCounts } from './actions/countActions'
import { getComments } from './actions/commentActions'

class App extends Component {

  componentDidMount() {
    this.props.tacoCounts();
    this.props.getComments();
    // this.props.fetchMembers();
    // this.props.fetchJackpot();
  }

  render () {
    return (
      <Container>
        <TeamCounts />
        <TacoTalk />
  
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  tacoCounts,
  getComments
}, dispatch)


export default connect(null, mapDispatchToProps)(App)

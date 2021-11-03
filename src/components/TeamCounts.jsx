import { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateCount } from '../actions/countActions'
import TeamTACo from '../images/RomanWithHat.png'
import TeamInstructors from '../images/taco_thumb_1.png'
import TeamHHS from '../images/HamSandwich.jpg';
import TeamTLC from '../images/lukas-tennie-unsplash.jpg'

class TeamCounts extends Component {

    addTeamACT = (e) => {
        e.preventDefault();
        this.props.updateCount("teamACT");
    }

    addTeamHHS = (e) => {
        e.preventDefault();
        this.props.updateCount("teamHHS");
    }

    addTeamTLC = (e) => {
        e.preventDefault();
        this.props.updateCount("teamTLC");
    }

    addTeamRR = (e) => {
        e.preventDefault();
        this.props.updateCount("teamRR");
    }

    render() {
        return (
            <Container>
<div className="team">
                <div className="header-space">
                <Row>
                    <h2>Total tacos consumed during Find My Taco capstone?</h2><br/>
                       <h1>{this.props.teamACT + this.props.teamHHS + this.props.teamTLC + this.props.teamRR}</h1>
                </Row>
                </div>
                <Row xs={4}>
                    <Col>
                        <Form onSubmit={this.addTeamACT}>
                            <Button className="btn bg-transparent" type="submit">
                                <img src={TeamTACo} width="200px" height="200px" alt="Dog picture used as button" />
                                {/* <img src="https://source.unsplash.com/150x150/?taco" alt="Random picture used for button" /> */}
                            </Button>
                        </Form>
                    </Col>

                    <Col>
                        <Form onSubmit={this.addTeamHHS}>
                            <Button className="btn bg-transparent" type="submit">
                                <img src={TeamHHS} width="200px" height="200px" alt="ham sandwich used as button" />
                            </Button>
                        </Form>
                    </Col>

                    <Col>
                        <Form onSubmit={this.addTeamTLC}>
                            <Button className="btn bg-transparent" type="submit">
                                <img src={TeamTLC} width="200px" height="200px" alt="waterfall picture used as button" />
                            </Button>
                        </Form>
                    </Col>
                    <Col>
                        <Form onSubmit={this.addTeamRR}>
                            <Button className="btn bg-transparent" type="submit">
                                <img src={TeamInstructors} alt="Random picture used for button" width="200" />
                            </Button>
                        </Form>
                    </Col>

                </Row>
{/* <div className="team"> */}
                <Row xs={4}>
                    <Col> <h3>TACo: {this.props.teamACT}</h3></Col>
                    <Col><h3>Hot Ham Sandwich: {this.props.teamHHS}</h3></Col>
                    <Col><h3>TLC: {this.props.teamTLC}</h3></Col>
                    <Col> <h3>Instructors: {this.props.teamRR}</h3></Col>
                </Row>

                {/* <Row xs={4}>
                    <Col> <h3>{this.props.teamACT}</h3></Col>
                    <Col><h3>{this.props.teamHHS}</h3></Col>
                    <Col><h3>TLC: {this.props.teamTLC}</h3></Col>
                    <Col> <h3></h3></Col>
                </Row>
 */}

                <Row xs={4}>
                    <Col>
                        <h4>Tom Lendy<br/>
                            Anne Lang<br/>
                            Chris Holman</h4>
                    </Col>
                    <Col>
                        <h4>Casey Cook<br/>
                            Christopher Mochel<br/>
                            Tod Easton</h4>
                    </Col>
                    <Col>
                        <h4>Tiffany Giordano<br/>
                            Lori Zurita<br/>
                            Chuck Smith</h4>
                    </Col>
                    <Col>
                        <h4>Rich Key<br/>
                            Rob Wing</h4>
                    </Col>
                </Row>
                </div>
            </Container>
        );

    }
}

const mapStateToProps = (state) => {
    return state.count
}

const mapDispatchToProps = dispatch => bindActionCreators({
    updateCount
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TeamCounts)

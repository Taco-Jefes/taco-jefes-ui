import { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateCount } from '../actions/countActions'

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
    
    render () {
        return (
            <Container>
    
                <Row>
                    <h1>Total tacos consumed: {this.props.teamACT + this.props.teamHHS + this.props.teamTLC + this.props.teamRR}</h1>
                </Row>
                <Row xs={4}>
                    <Col>
                        <Form onSubmit={this.addTeamACT}>
                            <Button className="btn bg-transparent" type="submit">
                                <img src="https://source.unsplash.com/150x150/?taco" alt="Random picture used for button" />
                            </Button>
                        </Form>
                    </Col>
    
                    <Col>
                        <Form onSubmit={this.addTeamHHS}>
                            <Button className="btn bg-transparent" type="submit">
                                <img src="https://source.unsplash.com/150x150/?mexican,food" alt="Random picture used for button" />
                            </Button>
                        </Form>
                    </Col>
    
                    <Col>
                        <Form onSubmit={this.addTeamTLC}>
                            <Button className="btn bg-transparent" type="submit">
                                <img src="https://source.unsplash.com/150x150/?ham,taco" alt="Random picture used for button" />
                            </Button>
                        </Form>
                    </Col>
                    <Col>
                        <Form onSubmit={this.addTeamRR}>
                            <Button className="btn bg-transparent" type="submit">
                                <img src="https://d3qdvvkm3r2z1i.cloudfront.net/media/catalog/product/cache/1/thumbnail/85e4522595efc69f496374d01ef2bf13/t/a/taco_thumb_1.png" alt="Random picture used for button" width="150" />
                            </Button>
                        </Form>
                    </Col>
    
                </Row>
    
                <Row xs={4}>
                    <h2><Col>ACT: {this.props.teamACT}</Col></h2>
                    <h2><Col>HHS: {this.props.teamHHS}</Col></h2>
                    <h2><Col>TLC: {this.props.teamTLC}</Col></h2>
                    <h2><Col>RRP: {this.props.teamRR}</Col></h2>
                </Row>
    
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

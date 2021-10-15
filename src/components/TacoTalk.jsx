import { Container, Row, Col, Form, Button, FormGroup, Input, Label } from 'react-bootstrap';
import CommentList from './CommentList';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addComment } from '../actions/commentActions.js'


class TacoTalk extends Component {
    handleCommentSubmit = (e) => {
        e.preventDefault();
        this.props.addComment(e.target.elements.comment.value);
        e.target.reset()
    }


    render() {
        return (
            <Container>


                <Row >
                    <Form onSubmit={this.handleCommentSubmit}>
                        <Col>
                            <Form.Group as={Col}>
                                {/* <Form.Label htmlFor="draws"># Draws</Form.Label> */}
                                <Form.Control type="text" id="comment" name="comment" placeholder="Please leave a comment." />

                            </Form.Group>
                        </Col>
                        <Col>
                            <Button type="submit">Submit</Button>
                        </Col>
                    </Form>
                </Row>

                <Row>
                    <h2>Taco Smack Down:</h2>
                    {this.props.comments.map((comment, i) => <CommentList key={i} comment={comment}/>)}
              
                </Row>
            </Container>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    addComment
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TacoTalk)
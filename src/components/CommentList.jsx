import React from "react"
import { Row, Col, Container } from "react-bootstrap"

const CommentList = ( {comment}) => (
    <Container>
    <Row className="bg-light border">
        <Col>{comment.comment}</Col>

    </Row>
    </Container>

)

export default CommentList
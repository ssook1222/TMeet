import * as React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {Comment} from "../../../dto/Comment";


const CommentList: React.FC = () => {
    const [comments, setComments] = useState<Array<Comment>>([]);

    useEffect(() => {
        getComments();
    }, []);

    const getComments = async () => {
        const res = await axios.get(`http://localhost:5000/api/comments/3`);
        // console.log(res)
        setComments(res.data);
    }
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;

        const comment = {
            meeting_id: 3,
            content: form.commentText.value,
            user_id: 2
        }

        let res = await axios.post('/api/comment', comment);
        console.log(res);
        // res = await axios.get(`http://localhost:5000/api/comments/3`);

        const newComments = [...comments];
        newComments.unshift(res.data);

        setComments(newComments);
        form.commentText.value = '';
    };

    const handleFocus = () => {
    }

    return (
        <>
            <Form className="mb-4" onSubmit={handleSubmit} style={{width: "90%", margin: "auto"}}>
                <Form.Group controlId="commentText">
                    <Form.Label style={{float: "left"}}>댓글</Form.Label>
                    <Form.Control required as="textarea" rows={4} style={{width: "90%"}} onClick={handleFocus}/>
                </Form.Group>
                <Button
                    variant="primary" type="submit"
                        style={{
                            backgroundColor: "#a7d4d4",
                            color: "white",
                            borderRadius: "5px",
                            borderColor: "#a7d4d4",
                        }}
                >
                    등록
                </Button>

            </Form>
            <div style={{marginBottom: "2vh"}}></div>
            {
                comments.map((comment: Comment) =>
                    <div style={{marginTop: "0.8rem"}}>
                        <Row className="comment" key={comment.id} style={{margin: "auto", width: "90%"}}>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                                borderBottom: "1px solid #dddddd",
                                fontSize: "0.8rem"
                            }}>
                                <span className="date">{comment.user.nickname}</span>
                                <span className="date">{comment.created}</span>
                            </div>
                            <Col xs={12}>{comment.content}</Col>
                        </Row>
                    </div>
                )
            }
        </>
    );
};

export default CommentList;
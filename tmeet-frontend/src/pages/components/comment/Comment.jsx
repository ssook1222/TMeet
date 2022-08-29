import { Button, Comment, Form, Input, List } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
const { TextArea } = Input;

//useeffect 사용, 로컬 스토리지에 댓글 저장

//DB 연결(user, meeting)
//meeting_id, user_id: 해당하는 meeting아이디와 user 아이디가 있을 경우 코드 실행

//1. 백엔드 entity에서 관계 설정

//2. 입력한 댓글을 DB로 보내는 기능

//3. 댓글을 DB로 보내는 기능(우선 작성자는 임의로 하고 구현 후에 DB에서 아이디 가져오기)
//백엔드 commentController addComment

//4. 댓글 목록을 DB에서 가져오는 기능(axios 사용, 시간순)
// 가져와서 띄우는 기능

//2. ID를 DB에서 가져오는 기능(댓글 작성 시)





// 댓글 기능
// https://hymndev.tistory.com/57

const CommentList = ({ comments }) => (
    <List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={(props) => <Comment {...props} />}
    />

);


const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                Add Comment
            </Button>
        </Form.Item>
    </>
);



const CommentApp = (props) => {
    const [form] = Form.useForm();
    // const [user, setUser] = useState();
    const [comments, setComments] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [value, setValue] = useState('');


    //
    // const CommentList: React.FC<Props> = (props) => {
    // const [comments, setComments] = useState<Array<Comment>>([]);
    // useEffect(() => {
    //     if (!props.board_id) {
    //         return;
    //     }
    //     getComments(props.board_id);
    // }, [props.board_id]);
    // const getComments = async (board_id) => {
    //     const res = await axios.get(`/api/comments?board_id=${props.board_id}`);
    //     setComments(res.data);
    // };

    const handleSubmit = () => {
        if (!value) return;
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            setValue('');
            setComments([
                ...comments,
                //댓글 작성자
                {
                    author: 'writer',
                    content: <p>{value}</p>,
                    datetime: moment().fromNow(),
                },
            ]);
        }, 1000);
        // //세션 스토리지 저장
        // sessionStorage.setItem('writer', value);
        console.log({comments});
        // console.log({setComments});
    };
//comment에서 작성자, 작성 시간, 내용 뽑아내서 배열로 만들기

    // const handleSubmit = async (event: any) => {
    //     event.preventDefault();
    //     event.stopPropagation();
    //
    //     const form = event.currentTarget;
    //
    //     const comment = {
    //         board_id: props.board_id,
    //         content: form.commentText.value
    //     }
    //
    //     let res = await axios.post('/api/comment', comment);
    //     console.log(res);
    //     res = await axios.get(`/api/comment?id=${res.data.id}`);
    //
    //     const newComments = [...comments];
    //     newComments.unshift(res.data);
    //
    //     setComments(newComments);
    //     form.commentText.value = '';
    // };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div>
            <div>
                <Comment
                    content={
                        <Editor
                            onChange={handleChange}
                            onSubmit={handleSubmit}
                            submitting={submitting}
                            value={value}
                        />
                    }
                />
            </div>
            <div style={{fontSize: "0.7rem"}}>
                {comments.length > 0 && <CommentList comments={comments} />}
            </div>
        </div>
    );
};

// return (
//     <>
//         <Form className="mb-4" onSubmit={handleSubmit}>
//             <Form.Group controlId="commentText">
//                 <Form.Label>댓글</Form.Label>
//                 <Form.Control required as="textarea" rows={4} />
//             </Form.Group>
//             <Button variant="primary" type="submit">
//                 등록
//             </Button>
//         </Form>
//         {
//             comments.map((comment: Comment) =>
//                 <Row className="comment" key={comment.id}>
//                     <Col xs={12} className="date">{comment.created}</Col>
//                     <Col xs={12}>{comment.content}</Col>
//                 </Row>
//             )
//         }
//     </>
//
// );
// };


export default CommentApp;
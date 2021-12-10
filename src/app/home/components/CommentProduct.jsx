import React, { createElement, useState, useEffect } from 'react'
import 'antd/dist/antd.css'
import { Comment, Tooltip, Avatar, Rate } from 'antd'
import moment from 'moment'
import { Form, Button, List, Input } from 'antd'
import { getComment } from '../../../services/api/userApi'
import { postComment, deleteComment } from '../../../services/api/customerApi'
import { useToast } from '../../../contexts/toast'

const { TextArea } = Input

const CommentProduct = ({ id }) => {
  const { error, warn, info, success } = useToast()
  const [action, setAction] = useState(null)
  const [comment, setComment] = useState([])

  const [rating, setRating] = useState()
  const [newComment, setNewComment] = useState({
    product: id,
    comment: '',
    rating: 0
  })
  const handleChange = (e) => setNewComment({ ...newComment, [e.target.name]: e.target.value })
  useEffect(() => {
    getComment(id).then((response) => {
      setComment(response.data.data)
    })
  }, [newComment.rating, newComment.comment])

  const addComment = () => {
    newComment.rating = rating
    postComment(newComment)
      .then((respone) => {
        success(respone.data.message)
      })
      .catch((err) => {
        error(err.response.data.message)
      })
  }

  const deleteComment = (idComment) => {
    console.log(idComment)

    deleteComment(idComment).then((respone) => {
      console.log(respone)
    })
    // .catch((err) => {
    //   error(err.response.data.message)
    // })
  }

  return (
    <div>
      {comment.map((cmt, index) => {
        return (
          <div>
            <Comment
              actions={[]}
              author={<a>{cmt.author}</a>}
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
              content={<p>{cmt.comment}</p>}
              datetime={[
                <Tooltip title={'Đánh giá lần cuối'}>
                  <span>{moment(cmt.updatedAt).format('DD/MM/YYYY')}</span>
                </Tooltip>,
                <Tooltip key="comment-basic-rate" title="Đánh giá">
                  <span>
                    <Rate disabled defaultValue={cmt.rating} />
                  </span>
                </Tooltip>

                // <span>
                // <Button key="comment-basic-delete-to" onClick={()=> deleteComment(cmt._id)}><span>Xóa</span></Button>
                // </span>
              ]}
            />
          </div>
        )
      })}
      <>
        <Form.Item>
          <TextArea rows={4} name="comment" onChange={(e) => handleChange(e)} />
          <span>
            <Rate name="rating" value={rating} onChange={(value) => setRating(value)} />
          </span>
        </Form.Item>

        <Form.Item>
          <Button onClick={addComment} type="primary">
            Thêm bình luận
          </Button>
        </Form.Item>
      </>
    </div>
  )
}
export default CommentProduct

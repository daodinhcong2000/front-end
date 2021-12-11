import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import 'antd/dist/antd.css'
import { Comment, Tooltip, Avatar, Rate } from 'antd'
import moment from 'moment'
import { Form, Button, Input } from 'antd'
import { getComment } from '../../../services/api/userApi'
import { postComment, deleteComment } from '../../../services/api/customerApi'
import { useToast } from '../../../contexts/toast'

const { TextArea } = Input

const CommentProduct = ({ productId }) => {
  const { userId } = useSelector((state) => state.user)
  const { error, warn, info, success } = useToast()
  const [comment, setComment] = useState([])
  const [ownComment, setOwnComment] = useState({
    id: '',
    comment: '',
    rating: 0
  })
  const [loading, setLoading] = useState(false)
  const [rating, setRating] = useState()
  const [newComment, setNewComment] = useState({
    product: productId,
    comment: '',
    rating: 0
  })
  const handleChange = (e) => setNewComment({ ...newComment, [e.target.name]: e.target.value })
  useEffect(() => {
    getComment(productId).then((response) => {
      response.data.data.map((cmt) => {
        if (userId == cmt.author._id) {
          setOwnComment({
            id: cmt._id,
            comment: cmt.comment,
            rating: cmt.rating
          })
        }
      })
      setComment(response.data.data)
    })
  }, [loading])

  const addComment = () => {
    newComment.rating = rating
    if (newComment.comment == '') {
      warn('Bạn chưa nhập nội dung bình luận')
    } else if (rating == null) {
      warn('Bạn vui lòng đánh giá sản phẩm')
    } else {
      postComment(newComment)
        .then((respone) => {
          success(respone.data.message)
          setLoading(!loading)
          setOwnComment({ id: '' })
        })
        .catch((err) => {
          error(err.response.data.message)
        })
    }
  }

  const deleteCmt = () => {
    deleteComment(ownComment.id)
      .then((respone) => {
        success(respone.data.message)
        setOwnComment({ id: '' })
        setLoading(!loading)
      })
      .catch((err) => {
        error(err.response.data.message)
      })
  }
  const actionDelete = () => {
    deleteCmt()
  }

  const actionChange = () => {
    setOwnComment({ id: '' })
  }

  const actions = [
    <Tooltip key="comment-basic-like" title="sửa">
      <span onClick={actionChange}>
        <span className="comment-action">Sửa</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="xóa" onClick={actionDelete}>
      <span>
        <span className="comment-action">Xóa</span>
      </span>
    </Tooltip>
  ]

  return (
    <div>
      {comment.map((cmt, index) => {
        return (
          <div key={index}>
            <Comment
              actions={ownComment.id != '' ? actions : []}
              author={
                <a>
                  {cmt.author.lastName} {cmt.author.firstName}{' '}
                </a>
              }
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
              ]}
            />
          </div>
        )
      })}
      {userId != '' && ownComment.id == '' ? (
        <>
          <Form.Item>
            <TextArea rows={4} name="comment" onChange={(e) => handleChange(e)} />
            <span>
              <Rate name="rating" value={rating} onChange={(value) => setRating(value)} />
            </span>
          </Form.Item>

          <Form.Item>
            <Button onClick={addComment} type="primary">
              Bình luận
            </Button>
          </Form.Item>
        </>
      ) : (
        ''
      )}
    </div>
  )
}
export default CommentProduct

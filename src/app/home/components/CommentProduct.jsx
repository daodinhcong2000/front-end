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
  const { error, warn, success } = useToast()
  const [comment, setComment] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadingbtn, setLoadingBtn] = useState(false)
  const [rating, setRating] = useState()
  const [commentText, setCommentText] = useState('')
  const [commentId, setCommentId] = useState(null)
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
          setRating(cmt.rating)
          setCommentId(cmt._id)
          setCommentText(cmt.comment)
        }
      })
      setComment(response.data.data)
      setLoading(false)
    })
  }, [loading])

  const addComment = () => {
    setLoadingBtn(true)
    newComment.rating = rating
    if (newComment.comment == '') {
      warn('Bạn chưa nhập nội dung bình luận')
      setLoadingBtn(false)
    } else if (rating == null) {
      warn('Bạn vui lòng đánh giá sản phẩm')
      setLoadingBtn(false)
    } else {
      postComment(newComment)
        .then((respone) => {
          success(respone.data.message)
          setLoading(true)
          setLoadingBtn(false)
          setRating(rating)
        })
        .catch((err) => {
          error(err.response.data.message)
          setLoading(true)
          setLoadingBtn(false)
        })
    }
  }

  const deleteCmt = () => {
    deleteComment(commentId)
      .then((respone) => {
        success(respone.data.message)
        setNewComment({
          ...newComment,
          comment: '',
          rating: 0
        })
        setLoading(true)
        setCommentId(null)
      })
      .catch((err) => {
        error(err.response.data.message)
        setLoading(true)
      })
  }
  const actionDelete = () => {
    setLoading(true)
    deleteCmt()
  }

  const actionChange = () => {
    setCommentId(null)
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
            {console.log('commentId', commentId)}
            {console.log('cmt.author._id', cmt.author._id)}
            <Comment
              actions={commentId === cmt._id ? actions : []}
              author={[
                <a>
                  {cmt.author.lastName} {cmt.author.firstName}{' '}
                </a>
              ]}
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="avt accommerce" />}
              content={[
                <div>
                  <Tooltip key="comment-basic-rate" title="Đánh giá">
                    <a>
                      <Rate disabled value={cmt.rating} style={{ fontSize: 15 }} />
                    </a>
                  </Tooltip>
                </div>,
                <div>
                  <p>{cmt.comment}</p>
                </div>
              ]}
              datetime={[
                <Tooltip title={'Đánh giá lần cuối'}>
                  <span>{moment(cmt.updatedAt).format('DD/MM/YYYY')}</span>
                </Tooltip>
              ]}
            />
          </div>
        )
      })}
      {userId != '' && commentId == null ? (
        <>
          <Form.Item>
            <TextArea rows={4} name="comment" onChange={(e) => handleChange(e)} />
            <span>
              <Rate name="rating" value={rating} onChange={(value) => setRating(value)} />
            </span>
          </Form.Item>

          <Form.Item>
            <Button onClick={addComment} type="primary" loading={loadingbtn}>
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

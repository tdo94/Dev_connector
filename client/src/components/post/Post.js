import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getPost } from '../../actions/post';
import Spinner from '../layout/Spinner';
import PostItem from '../posts/PostItem';

const Post = ({ getPost, post, loading, match }) => {
  useEffect(() => {
    getPost(match.params.id)
  }, [getPost, match.params.id]);

  return (
    loading || post === null ?
      <Spinner /> :
      <Fragment>
        <Link to='/posts' className="btn">Back to Posts</Link>
        <PostItem post={post} showActions={false} />
      </Fragment>
  )
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object,
  loading: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  post: state.post.post,
  loading: state.post.loading
})

export default connect(mapStateToProps, { getPost })(Post);

import React from 'react';
import './PostCard.scss';
interface IPost {
  title: string;
  message: string;
}

const PostCard = ({ name, subname, posts, rang, ...props }: any) => {
  const userPosts: IPost[] = posts.map((post: IPost) => (
    <p className='post-card__message'>
      {post.title}: {post.message}
    </p>
  ));
  console.log(userPosts);
  const classPostCardRang =
    rang === 'admin' ? ' post-card_user-message' : ' post-card_admin-message';
  return (
    <div className={'post-card ' + classPostCardRang}>
      <p>
        {name} {subname} написал:
      </p>
      {userPosts}
    </div>
  );
};

export default PostCard;

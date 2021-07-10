import React from 'react';
import Header from './Header';
import PostCard from './PostCard';

interface IUserCard {
  name: string;
  subname: string;
  age: number;
  rang: string;
  posts: { title: string; message: string }[];
}

const usersPosts: IUserCard[] = [
  {
    name: 'name1',
    subname: 'subname1',
    age: 20,
    posts: [
      {
        title: 'title1',
        message: 'first post',
      },
    ],
    rang: 'user',
  },
  {
    name: 'name2',
    subname: 'subname2',
    age: 20,
    posts: [
      {
        title: 'title1',
        message: 'first post',
      },
    ],
    rang: 'user',
  },
  {
    name: 'name3',
    subname: 'subname3',
    age: 20,
    posts: [
      {
        title: 'title1',
        message: 'first post',
      },
      {
        title: 'title2',
        message: 'second post',
      },
      {
        title: 'title3',
        message: 'third post',
      },
    ],
    rang: 'admin',
  },
];
const DashboardPage = () => {
  return (
    <>
      <Header />
      <section>
        <aside>news</aside>
        markets menu / projects list
        {usersPosts.map((user: IUserCard) => {
          return (
            <PostCard
              key={Math.random()}
              name={user.name}
              subname={user.subname}
              posts={user.posts}
              rang={user.rang}
            />
          );
        })}
      </section>
    </>
  );
};
export default DashboardPage;

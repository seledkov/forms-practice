import React from 'react';
import Header from './Header';
const userPosts: {}[] = [
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
    status: 'user',
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
    status: 'user',
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
    status: 'admin',
  },
];
const DashboardPage = () => {
  return (
    <>
      <Header />
      <section>
        <aside>news</aside>
        markets menu / projects list
      </section>
    </>
  );
};
export default DashboardPage;

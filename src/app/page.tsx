'use client';

import styles from './page.module.scss'
import Feed from '../components/feed/feed'
// import Link from 'next/link'
import userList, { user01 } from '@/mockData/UserList';
import feedList from '@/mockData/FeedList';
import { UserData } from '@/models/UserData';
import { useState } from 'react';
import { FeedData } from '@/models/FeedData';
import CommentTab from '@/components/commentTab/commentTab';

export default function Home() {
  const currentUser: UserData = user01;

  let [showCommentTab, setShowCommentTab] = useState(false);
  let [selectedFeed, setSelectedFeed] = useState<FeedData>();

  const handleShowCommentTab = (feed: FeedData): void => {
    setShowCommentTab(true);
    setSelectedFeed(feed);
  };

  const handleCloseCommentTab = (): void => {
    setShowCommentTab(false);
    setSelectedFeed(undefined);
  }

  return (
    <main className={styles.main}>
      {
        feedList.map((feed) => <Feed
          key={feed.id}
          feed={feed}
          onClickShowComments={handleShowCommentTab}
        />)
      }

      {/* <Link href="/about">About</Link> */}

      <CommentTab
        feed={selectedFeed}
        onClose={handleCloseCommentTab}
        show={showCommentTab}
      />
    </main>
  )
}

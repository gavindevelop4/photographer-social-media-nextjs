'use client';

import styles from './page.module.scss'
import Feed from '../components/feed/feed'
// import Link from 'next/link'
import userList, { user01 } from '@/mockData/UserList';
import { UserData } from '@/models/UserData';
import { useEffect, useState } from 'react';
import { FeedData } from '@/models/FeedData';
import CommentTab from '@/components/commentTab/commentTab';
import { useAppDispatch } from '@/store/hooks';
import { getFeeds } from '@/store/slices/feedSlice';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export default function Home() {
  const dispatch = useAppDispatch()

  const currentUser: UserData = user01;

  let [showCommentTab, setShowCommentTab] = useState(false);
  let [selectedFeed, setSelectedFeed] = useState<FeedData>();

  const feedsList: FeedData[] = useSelector((state: RootState) => state.feedReducer.value);

  useEffect(() => {
    dispatch(getFeeds());
  }, []);

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
        feedsList.map((feed) => <Feed
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

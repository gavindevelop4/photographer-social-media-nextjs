import styles from './page.module.css'
import Feed from '../components/feed/feed'
// import Link from 'next/link'
import userList, { user01 } from '@/mockData/UserList';
import feedList from '@/mockData/FeedList';
import { UserData } from '@/models/UserData';

export default function Home() {
  const currentUser: UserData = user01;

  return (
    <main className={styles.main}>
      {
        feedList.map((feed) => <Feed
          key={feed.id}
          feed={feed}
        />)
      }

      {/* <Link href="/about">About</Link> */}
    </main>
  )
}

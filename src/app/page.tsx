import styles from './page.module.css'
import Feed from '../components/feed/feed'
// import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <Feed />
      <Feed />
      <Feed />
      <Feed />

      {/* <Link href="/about">About</Link> */}
    </main>
  )
}

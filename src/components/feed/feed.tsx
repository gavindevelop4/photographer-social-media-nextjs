'use client';

import styles from './feed.module.scss'
import Image from 'next/image'
import LikeButton from '../likeButton/likeButton'

export default function Feed() {
  return (
    <div className={styles.feed}>
      <div className={styles.image}>
        <Image
          src="https://picsum.photos/2000"
          fill
          alt="feed"
          sizes='100vw'
        />
      </div>

      <div>
        <LikeButton
          isLiked={true}
          onChange={(like) => { console.log(like) }}
        />
      </div>
    </div>
  )
}
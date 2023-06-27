'use client';

import styles from './feed.module.scss'
import Image from 'next/image'
import LikeButton from '../likeButton/likeButton'
import CommentButton from '../commentButton/commentButton';
import ShareButton from '../shareButton/shareButton';
import InfoButton from '../infoButton/infoButton';

export default function Feed() {
  return (
    <div className={styles.feed}>
      <div className={styles.user}>
        <div className={styles.avatar}>
          <Image
            src="https://picsum.photos/20"
            fill
            alt="feed"
          />
        </div>
        <div className={styles.userName}>
          Username
        </div>
      </div>

      <div className={styles.image}>
        <Image
          src="https://picsum.photos/2000"
          fill
          alt="feed"
          sizes='100vw'
        />
      </div>

      <div className={styles.actionBar}>
        <LikeButton
          className={styles.button}
          isLiked={true}
          onChange={(like) => { console.log(like) }}
        />

        <CommentButton className={styles.button}/>

        <ShareButton className={styles.button}/>

        <InfoButton className={styles.button}/>
      </div>
    </div>
  )
}
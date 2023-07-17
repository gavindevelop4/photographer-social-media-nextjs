'use client';

import styles from './feed.module.scss'
import Image from 'next/image'
import LikeButton from '../likeButton/likeButton'
import CommentButton from '../commentButton/commentButton';
import ShareButton from '../shareButton/shareButton';
import InfoButton from '../infoButton/infoButton';
import { FeedData } from '@/models/FeedData';
import { useAppSelector } from '@/store/hooks';
import { UserData } from '@/models/UserData';

interface FeedProps {
  feed: FeedData;
}

export default function Feed({ feed }: FeedProps) {
  const currentUser: UserData = useAppSelector((state) => state.userReducer.value);
  const foundLikedUser: UserData | undefined = feed.likedUser.find((userItem) => userItem.id === currentUser.id);
  const isLiked = foundLikedUser !== undefined

  return (
    <div className={styles.feed}>
      <div className={styles.user_section}>
        <div className={styles.avatar}>
          <Image
            src={ feed.user.avatar }
            fill
            alt="avatar"
          />
        </div>
        <div className={styles.userName}>
          {feed.user.username}
        </div>
      </div>

      <div className={styles.image_section}>
        <Image
          src={ feed.image }
          fill
          alt="feed"
          sizes='100vw'
        />
      </div>

      <div className={styles.actionBar}>
        <LikeButton
          className={styles.button}
          isLiked={ isLiked }
          onChange={(like) => { console.log(like) }}
        />

        <CommentButton className={styles.button}/>

        <ShareButton className={styles.button}/>

        <InfoButton className={styles.button}/>
      </div>

      <div className={styles.detail_section}>
        <div className={styles.likes}>
            { feed.likedUser.length } likes
        </div>

        <div className={styles.title}>
          <span className={styles.username}>
            { feed.user.username }
          </span>
          <span className={styles.caption}>
            { feed.caption }
          </span>
        </div>

        <div className={styles.comments_section}>
          {
            feed.comments.length < 3 ?
              feed.comments.map((comment) => {
                return (
                  <div
                    className={styles.comment}
                    key={comment.id}
                  >
                    <span className={styles.username}>
                      {comment.user.username}
                    </span>
                    <span className={styles.content}>
                      {comment.comment}
                    </span>
                  </div>
                )
              })
            : <div className={styles.viewAllComments}>View All Comments</div>
          }

          
        </div>
      </div>
    </div>
  )
}
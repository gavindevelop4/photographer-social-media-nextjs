import { FeedData } from '@/models/FeedData';
import styles from './commentTab.module.scss'
import { useEffect, UIEvent } from 'react';

interface CommentTabProps {
  feed: FeedData | undefined;
  show: boolean;
  onClose: () => void;
}

export default function CommentTab({ feed, show, onClose }: CommentTabProps) {
  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    console.log('scroll')
    event.preventDefault();
  };

  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      event.preventDefault();
    })
  }, [])  

  return (
    <div className={`${styles.commentTab} ${show ? styles.show : ''}`}>
      <div className={styles.overlay} onClick={onClose} onScroll={handleScroll}></div>
      <div className={styles.container}>
        <div className={styles.title}>
          Comments
        </div>

        <div
          className={styles.comment}
        >
          <span className='username'>
            {feed?.user.username}
          </span>
          <span className={styles.content}>
            {feed?.caption}
          </span>
        </div>
        {
          feed?.comments.map((comment) => {
            return (
              <div
                className={styles.comment}
                key={comment.id}
              >
                <span className='username'>
                  {comment.user.username}
                </span>
                <span className={styles.content}>
                  {comment.comment}
                </span>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

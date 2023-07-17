import { FeedData } from '@/models/FeedData';
import styles from './commentTab.module.scss'

interface CommentTabProps {
  feed: FeedData | undefined;
  show: boolean;
  onClose: () => void;
}

export default function CommentTab({feed, show, onClose}: CommentTabProps) {
  return (
    <div className={`${styles.commentTab} ${show ? styles.show : ''}`}>
      <div className={styles.overlay} onClick={onClose}></div>
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

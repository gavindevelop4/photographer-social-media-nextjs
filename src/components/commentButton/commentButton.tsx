import { FaRegComment } from 'react-icons/fa'

interface CommentButtonProps {
  className: string;
}

export default function CommentButton({className}: CommentButtonProps) {
  const handleClick = () => {
    console.log('click comment button');
  }

  return (
    <div onClick={handleClick} className={className}>
      <FaRegComment
        size={30}
      />
    </div>
  )
}
import { FaRegComment } from 'react-icons/fa'

interface CommentButtonProps {
  className: string;
  onClick: () => void;
}

export default function CommentButton({className, onClick}: CommentButtonProps) {
  const handleClick = () => {
    console.log('click comment button');
    onClick();
  }

  return (
    <div onClick={handleClick} className={className}>
      <FaRegComment
        size={30}
      />
    </div>
  )
}
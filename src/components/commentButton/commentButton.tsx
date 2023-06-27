import { FaRegComment } from 'react-icons/fa'

export default function CommentButton() {
  const handleClick = () => {
    console.log('click comment button');
  }

  return (
    <div onClick={handleClick}>
      <FaRegComment
        size={30}
      />
    </div>
  )
}
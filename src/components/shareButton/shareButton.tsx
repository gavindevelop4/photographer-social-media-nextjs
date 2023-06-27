import { FiShare } from 'react-icons/fi'

export default function ShareButton() {
  const handleClick = () => {
    console.log('click comment button');
  }

  return (
    <div onClick={handleClick}>
      <FiShare
        size={30}
      />
    </div>
  )
}
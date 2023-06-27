import { FiShare } from 'react-icons/fi'

interface ShareButtonProps {
  className: string;
}

export default function ShareButton({className}: ShareButtonProps) {
  const handleClick = () => {
    console.log('click comment button');
  }

  return (
    <div className={className} onClick={handleClick}>
      <FiShare
        size={30}
      />
    </div>
  )
}
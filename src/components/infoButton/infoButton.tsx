import { GrCircleInformation } from 'react-icons/gr'

interface InfoButtonProps {
  className: string;
}

export default function InfoButton({className}: InfoButtonProps) {
  const handleClick = () => {
    console.log('click info button');
  }

  return (
    <div onClick={handleClick} className={className}>
      <GrCircleInformation
        size={30}
      />
    </div>
  )
}
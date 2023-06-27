import { GrCircleInformation } from 'react-icons/gr'

export default function InfoButton() {
  const handleClick = () => {
    console.log('click info button');
  }

  return (
    <div onClick={handleClick}>
      <GrCircleInformation
        size={30}
      />
    </div>
  )
}
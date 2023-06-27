import styles from './bottomNavBar.module.scss';
import { AiOutlineMessage } from 'react-icons/ai'
import { BiSolidMessageAltAdd, BiSolidUser } from 'react-icons/bi'
import { FaSearch, FaUser } from 'react-icons/fa'
import { GoHomeFill } from 'react-icons/go'

export default function BottomNavBar() {
  return (
    <div className={styles.bottomNavBar}>
      <div>
        <GoHomeFill
          size={30}
        />
      </div>

      <div>
        <FaSearch
          size={25}
        />
      </div>

      <div>
        <BiSolidMessageAltAdd
          size={30}
        />
      </div>

      <div>
        <AiOutlineMessage
          size={28}
        />
      </div>

      <div>
        <FaUser
          size={25}
        />
      </div>
    </div>
  )
}
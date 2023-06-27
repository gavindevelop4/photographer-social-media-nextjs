import styles from './bottomNavBar.module.scss';
import { AiFillHome } from 'react-icons/ai'
import { BsSearch, BsChat } from 'react-icons/bs'
import { BiSolidMessageAltAdd, BiSolidUser } from 'react-icons/bi'

export default function bottomNavBar() {
  return (
    <div className={styles.bottomNavBar}>
      <div>
        <AiFillHome
          size={30}
        />
      </div>

      <div>
        <BsSearch
          size={30}
        />
      </div>

      <div>
        <BiSolidMessageAltAdd
          size={30}
        />
      </div>

      <div>
        <BsChat
          size={30}
        />
      </div>

      <div>
        <BiSolidUser
          size={30}
        />
      </div>
    </div>
  )
}
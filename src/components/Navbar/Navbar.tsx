import styles from './navbar.module.css'
import { FaAlignJustify } from 'react-icons/fa'

type Props = {}
const Navbar = (props: Props) => {
  return (
    <nav>
      <ul className={styles.navbarList}>
        <li className={`${styles.navbarItem} ${styles.leftNavSection}`}>
          <FaAlignJustify className={styles.hamburgerIcon} />
          <h1>BUSINESS NAME</h1>
        </li>
        <li className={`${styles.navbarItem} ${styles.rightNavSection}`}>
          <img className={styles.logo} src="" alt="" />
        </li>
      </ul>
    </nav>
  )
}
export default Navbar

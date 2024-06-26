import { useState } from 'react'
import styles from './navbar.module.css'
import { FaAlignJustify } from 'react-icons/fa'
import Menu from '../Menu/Menu'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const handleMenuToggle = () => {
    setToggleMenu(!toggleMenu)
  }
  return (
    <section>
      <nav>
        <ul className={styles.navbarList}>
          <li className={`${styles.navbarItem} ${styles.leftNavSection}`}>
            <FaAlignJustify
              onClick={handleMenuToggle}
              className={styles.hamburgerIcon}
            />

            <h1>BUSINESS NAME</h1>
          </li>
          <li className={`${styles.navbarItem} ${styles.rightNavSection}`}>
            <img className={styles.logo} src="" alt="" />
          </li>
        </ul>
      </nav>

      {toggleMenu && (
        <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      )}
    </section>
  )
}
export default Navbar

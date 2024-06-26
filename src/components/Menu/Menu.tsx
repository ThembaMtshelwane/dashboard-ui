import styles from './menu.module.css'
import { FaAngleLeft } from 'react-icons/fa'

type Props = {
  toggleMenu: boolean
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>
}
const Menu = ({ toggleMenu, setToggleMenu }: Props) => {
  const handleOpen = () => {
    setToggleMenu(!toggleMenu)
  }
  return (
    <>
      {toggleMenu && (
        <section className={styles.menuContainer}>
          <section className={styles.topSection}>
            <FaAngleLeft onClick={handleOpen} className={styles.backArrow} />
          </section>
          <ul className={styles.listContainer}>
            <li className={styles.menuItem}>
              <a href="">Item 1</a>
            </li>
            <li className={styles.menuItem}>
              <a href="">Item 2</a>
            </li>
            <li className={styles.menuItem}>
              <a href="">Item 3</a>
            </li>
            <li className={styles.menuItem}>
              <a href="">Item 4</a>
            </li>
          </ul>
        </section>
      )}
    </>
  )
}
export default Menu

import styles from './menu.module.css'
import { FaAngleLeft } from 'react-icons/fa'

type Props = {}
const Menu = (props: Props) => {
  return (
    <section className={styles.menuContainer}>
      <section className={styles.topSection}>
        <FaAngleLeft className={styles.backArrow} />
      </section>
      <ul className={styles.listContainer}>
        <li>
          <a href="">Item 1</a>
        </li>
        <li>
          <a href="">Item 2</a>
        </li>
        <li>
          <a href="">Item 3</a>
        </li>
        <li>
          <a href="">Item 4</a>
        </li>
      </ul>
    </section>
  )
}
export default Menu

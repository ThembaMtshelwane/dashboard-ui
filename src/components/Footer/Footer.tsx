import styles from './footer.module.css'

const Footer = () => {
  return (
    <section className={styles.footerContainer}>
      <p>
        Created by{' '}
        <a href="https://github.com/ThembaMtshelwane" target="_blank">
          ThembaMM3
        </a>
      </p>
    </section>
  )
}
export default Footer

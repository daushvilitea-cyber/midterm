import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.Footer}>
      
      <div className={styles.FooterContainer}>
        <span>Condisions of Use</span>
        <span>Privacy Notice</span>
        <span>Interest-Based adds</span>

      </div>
      <div className={styles.FooterContainer}>
        <span>© 1996-2026, MyStore.com, Inc. or its affiliates</span>

      </div>

    </footer>
  )
}

export default Footer
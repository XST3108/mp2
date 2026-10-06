import { Link } from 'react-router-dom'
import styles from './NotFoundPage.module.css'

function NotFoundPage() {
  return (
    <div className={styles.wrap}>
      <h1>Page not found</h1>
      <Link to="/" className={styles.link}>
        ← Back to list
      </Link>
    </div>
  )
}

export default NotFoundPage

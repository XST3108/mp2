import styles from './Status.module.css'

interface StatusProps {
  loading: boolean
  error: string | null
}

// 加载中 / 出错时显示的提示
function Status({ loading, error }: StatusProps) {
  if (error) return <p className={`${styles.status} ${styles.error}`}>{error}</p>
  if (loading) return <p className={styles.status}>Loading meals…</p>
  return null
}

export default Status

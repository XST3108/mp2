import { NavLink, Outlet } from 'react-router-dom'
import styles from './Layout.module.css'

function Layout() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <NavLink to="/" className={styles.logo}>
          🍽️ Recipe Finder
        </NavLink>
        <nav className={styles.nav}>
          <NavLink to="/" end className={linkClass}>
            List
          </NavLink>
          <NavLink to="/gallery" className={linkClass}>
            Gallery
          </NavLink>
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        Data from <a href="https://www.themealdb.com/">TheMealDB</a>
      </footer>
    </div>
  )
}

export default Layout

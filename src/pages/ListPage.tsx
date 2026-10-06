import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Status from '../components/Status'
import { useMeals } from '../hooks/useMeals'
import type { DetailNavState } from '../navState'
import type { Meal } from '../types'
import styles from './ListPage.module.css'

type SortKey = 'name' | 'category' | 'area' | 'id'
type SortOrder = 'asc' | 'desc'

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: 'name', label: 'Name' },
  { value: 'category', label: 'Category' },
  { value: 'area', label: 'Cuisine' },
  { value: 'id', label: 'ID' },
]

function compareMeals(a: Meal, b: Meal, key: SortKey): number {
  if (key === 'id') return Number(a.id) - Number(b.id)
  // 主排序相同时按名字排，结果更稳定
  return a[key].localeCompare(b[key]) || a.name.localeCompare(b.name)
}

function ListPage() {
  const { meals, loading, error } = useMeals()
  // 把搜索词和排序方式存在网址里，从详情页返回时不会丢失
  const [params, setParams] = useSearchParams()
  const query = params.get('q') ?? ''
  const sortKey = (params.get('sort') as SortKey | null) ?? 'name'
  const order = (params.get('order') as SortOrder | null) ?? 'asc'

  const updateParam = (key: string, value: string) => {
    const next = new URLSearchParams(params)
    if (value) next.set(key, value)
    else next.delete(key)
    setParams(next, { replace: true })
  }

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    const filtered = q ? meals.filter((m) => m.name.toLowerCase().includes(q)) : meals
    const sorted = [...filtered].sort((a, b) => compareMeals(a, b, sortKey))
    return order === 'desc' ? sorted.reverse() : sorted
  }, [meals, query, sortKey, order])

  const navState: DetailNavState = { ids: results.map((m) => m.id) }

  return (
    <section>
      <h1 className={styles.title}>Search Recipes</h1>

      <div className={styles.controls}>
        <input
          className={styles.search}
          type="search"
          placeholder="Search by meal name, e.g. chicken"
          value={query}
          onChange={(e) => updateParam('q', e.target.value)}
          aria-label="Search meals"
          autoFocus
        />

        <label className={styles.sortLabel}>
          Sort by
          <select
            className={styles.select}
            value={sortKey}
            onChange={(e) => updateParam('sort', e.target.value)}
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>

        <div className={styles.orderGroup} role="group" aria-label="Sort order">
          <button
            type="button"
            className={order === 'asc' ? `${styles.orderBtn} ${styles.orderActive}` : styles.orderBtn}
            onClick={() => updateParam('order', 'asc')}
          >
            ↑ Ascending
          </button>
          <button
            type="button"
            className={order === 'desc' ? `${styles.orderBtn} ${styles.orderActive}` : styles.orderBtn}
            onClick={() => updateParam('order', 'desc')}
          >
            ↓ Descending
          </button>
        </div>
      </div>

      <Status loading={loading} error={error} />

      {!loading && !error && (
        <>
          <p className={styles.count}>
            {results.length} {results.length === 1 ? 'result' : 'results'}
          </p>
          {results.length === 0 ? (
            <p className={styles.empty}>No meals match “{query}”.</p>
          ) : (
            <ul className={styles.list}>
              {results.map((meal) => (
                <li key={meal.id}>
                  <Link to={`/meal/${meal.id}`} state={navState} className={styles.item}>
                    <img
                      className={styles.thumb}
                      src={`${meal.thumb}/small`}
                      alt={meal.name}
                      loading="lazy"
                    />
                    <div className={styles.info}>
                      <span className={styles.name}>{meal.name}</span>
                      <span className={styles.meta}>
                        <span className={styles.tag}>{meal.category}</span>
                        <span className={styles.tag}>{meal.area}</span>
                        <span className={styles.id}>#{meal.id}</span>
                      </span>
                    </div>
                    <span className={styles.arrow} aria-hidden="true">
                      ›
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </section>
  )
}

export default ListPage

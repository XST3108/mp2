import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Status from '../components/Status'
import { useMeals } from '../hooks/useMeals'
import type { DetailNavState } from '../navState'
import styles from './GalleryPage.module.css'

// 两组筛选条件在网址里的参数名，例如 ?category=Beef&category=Dessert&cuisine=Italy
type FilterKey = 'category' | 'cuisine'

interface FilterGroupProps {
  label: string
  options: string[]
  selected: string[]
  onToggle: (value: string) => void
  onClear: () => void
  scrollable?: boolean
}

// 一组可多选的筛选按钮
function FilterGroup({ label, options, selected, onToggle, onClear, scrollable }: FilterGroupProps) {
  return (
    <div className={styles.group}>
      <span className={styles.filterLabel}>{label}</span>
      <div className={scrollable ? `${styles.chips} ${styles.chipsScroll}` : styles.chips}>
        <button
          type="button"
          className={selected.length === 0 ? `${styles.chip} ${styles.chipActive}` : styles.chip}
          onClick={onClear}
        >
          All
        </button>
        {options.map((option) => {
          const active = selected.includes(option)
          return (
            <button
              key={option}
              type="button"
              className={active ? `${styles.chip} ${styles.chipActive}` : styles.chip}
              onClick={() => onToggle(option)}
              aria-pressed={active}
            >
              {option}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function GalleryPage() {
  const { meals, loading, error } = useMeals()
  // 选中的筛选条件存在网址里，从详情页返回时不会丢失
  const [params, setParams] = useSearchParams()
  const selectedCategories = params.getAll('category')
  const selectedCuisines = params.getAll('cuisine')

  // 从数据里提取所有分类和菜系
  const categories = useMemo(
    () => [...new Set(meals.map((m) => m.category))].sort(),
    [meals],
  )
  const cuisines = useMemo(() => [...new Set(meals.map((m) => m.area))].sort(), [meals])

  // 只修改其中一组，另一组保持不变
  const setGroup = (key: FilterKey, values: string[]) => {
    const next = new URLSearchParams(params)
    next.delete(key)
    values.forEach((v) => next.append(key, v))
    setParams(next, { replace: true })
  }

  const toggle = (key: FilterKey, current: string[], value: string) =>
    setGroup(
      key,
      current.includes(value) ? current.filter((v) => v !== value) : [...current, value],
    )

  // 同一组内：满足任意一个选中项即可（或）
  // 两组之间：必须同时满足（且），例如 "Dessert 并且 来自 Italy"
  const visible = meals
    .filter(
      (m) =>
        (selectedCategories.length === 0 || selectedCategories.includes(m.category)) &&
        (selectedCuisines.length === 0 || selectedCuisines.includes(m.area)),
    )
    .sort((a, b) => a.name.localeCompare(b.name))

  const navState: DetailNavState = { ids: visible.map((m) => m.id) }
  const hasFilters = selectedCategories.length > 0 || selectedCuisines.length > 0

  return (
    <section>
      <h1 className={styles.title}>Gallery</h1>

      <div className={styles.filters}>
        <FilterGroup
          label="Category"
          options={categories}
          selected={selectedCategories}
          onToggle={(v) => toggle('category', selectedCategories, v)}
          onClear={() => setGroup('category', [])}
        />
        <FilterGroup
          label="Cuisine"
          options={cuisines}
          selected={selectedCuisines}
          onToggle={(v) => toggle('cuisine', selectedCuisines, v)}
          onClear={() => setGroup('cuisine', [])}
          scrollable
        />
      </div>

      <Status loading={loading} error={error} />

      {!loading && !error && (
        <>
          <div className={styles.summary}>
            <p className={styles.count}>
              Showing {visible.length} {visible.length === 1 ? 'meal' : 'meals'}
              {selectedCategories.length > 0 && ` · Category: ${selectedCategories.join(', ')}`}
              {selectedCuisines.length > 0 && ` · Cuisine: ${selectedCuisines.join(', ')}`}
            </p>
            {hasFilters && (
              <button
                type="button"
                className={styles.clearAll}
                onClick={() => setParams(new URLSearchParams(), { replace: true })}
              >
                Clear all filters
              </button>
            )}
          </div>

          {visible.length === 0 ? (
            <p className={styles.empty}>No meals match this combination of filters.</p>
          ) : (
            <div className={styles.grid}>
              {visible.map((meal) => (
                <Link
                  key={meal.id}
                  to={`/meal/${meal.id}`}
                  state={navState}
                  className={styles.card}
                >
                  <img
                    className={styles.image}
                    src={`${meal.thumb}/medium`}
                    alt={meal.name}
                    loading="lazy"
                  />
                  <div className={styles.overlay}>
                    <span className={styles.name}>{meal.name}</span>
                    <span className={styles.badges}>
                      <span className={styles.badge}>{meal.category}</span>
                      <span className={styles.badge}>{meal.area}</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  )
}

export default GalleryPage

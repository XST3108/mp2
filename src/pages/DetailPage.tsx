import { useEffect, useMemo } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import Status from '../components/Status'
import { useMeals } from '../hooks/useMeals'
import type { DetailNavState } from '../navState'
import styles from './DetailPage.module.css'

interface InstructionLine {
  text: string
  heading: boolean
}

// API 里的做法文本格式不统一，这里整理成统一的"小标题 + 编号步骤"
function parseInstructions(raw: string): InstructionLine[] {
  const result: InstructionLine[] = []
  let afterMarker = false // 上一行是不是单独的编号

  for (const rawLine of raw.split(/\r?\n/)) {
    const line = rawLine.trim()
    if (!line) continue

    // 单独成行的编号，例如 "1"、"2."、"step 3"、"STEP 4:"，不显示
    if (/^(step\s*)?\d+\s*[.:)]?$/i.test(line)) {
      afterMarker = true
      continue
    }

    // 去掉行首自带的编号，例如 "1. Preheat..."、"Step 2: Mix..."，统一由页面编号
    const text = line.replace(/^(step\s*)?\d+\s*[.:)-]\s*/i, '')
    if (!text) continue

    // 小标题：很短、不以句号结尾，并且以冒号结尾 / 全大写 / 紧跟在编号后面
    // 例如 "Cooking:"、"STIR FRY"、编号 "1" 下面的 "Prepare the Figs"
    const short = text.length <= 45 && !/[.!?]$/.test(text)
    const heading =
      short &&
      (text.endsWith(':') ||
        (/[A-Z]/.test(text) && text === text.toUpperCase()) ||
        afterMarker)

    result.push({ heading, text: heading ? text.replace(/:$/, '') : text })
    afterMarker = false
  }
  return result
}

function DetailPage() {
  const { id } = useParams<{ id: string }>()
  const location = useLocation()
  const navigate = useNavigate()
  const { meals, loading, error } = useMeals()

  // 从列表/画廊点进来时，用当时的列表顺序；直接输入网址打开时，用按名字排序的全部菜
  const fromState = (location.state as DetailNavState | null)?.ids
  const ids = useMemo(() => {
    if (fromState && fromState.length > 0) return fromState
    return [...meals].sort((a, b) => a.name.localeCompare(b.name)).map((m) => m.id)
  }, [fromState, meals])

  const meal = meals.find((m) => m.id === id)
  const index = id ? ids.indexOf(id) : -1
  // 首尾循环：第一个的"上一个"是最后一个
  const prevId = index >= 0 ? ids[(index - 1 + ids.length) % ids.length] : undefined
  const nextId = index >= 0 ? ids[(index + 1) % ids.length] : undefined

  // 键盘左右方向键也能切换
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && prevId) navigate(`/meal/${prevId}`, { state: { ids } })
      if (e.key === 'ArrowRight' && nextId) navigate(`/meal/${nextId}`, { state: { ids } })
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prevId, nextId, ids, navigate])

  // 切换菜品时回到页面顶部
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (loading || error) return <Status loading={loading} error={error} />

  if (!meal) {
    return (
      <div className={styles.notFound}>
        <h1>Meal not found</h1>
        <p>No meal with ID “{id}”.</p>
        <Link to="/" className={styles.backLink}>
          ← Back to list
        </Link>
      </div>
    )
  }

  const navState: DetailNavState = { ids }
  const steps = parseInstructions(meal.instructions)
  let stepNumber = 0

  return (
    <article className={styles.detail}>
      <div className={styles.topBar}>
        <button
          type="button"
          className={styles.backLink}
          // 直接打开网址时没有上一页，就回到首页
          onClick={() => (location.key === 'default' ? navigate('/') : navigate(-1))}
        >
          ← Back
        </button>
        <div className={styles.pager}>
          {prevId && (
            <Link to={`/meal/${prevId}`} state={navState} className={styles.pagerBtn}>
              ← Previous
            </Link>
          )}
          <span className={styles.position}>
            {index + 1} / {ids.length}
          </span>
          {nextId && (
            <Link to={`/meal/${nextId}`} state={navState} className={styles.pagerBtn}>
              Next →
            </Link>
          )}
        </div>
      </div>

      <div className={styles.hero}>
        <img className={styles.image} src={meal.thumb} alt={meal.name} />
        <div className={styles.summary}>
          <h1 className={styles.name}>{meal.name}</h1>
          <dl className={styles.facts}>
            <div>
              <dt>Category</dt>
              <dd>{meal.category}</dd>
            </div>
            <div>
              <dt>Cuisine</dt>
              <dd>{meal.area}</dd>
            </div>
            <div>
              <dt>Meal ID</dt>
              <dd>#{meal.id}</dd>
            </div>
            <div>
              <dt>Ingredients</dt>
              <dd>{meal.ingredients.length}</dd>
            </div>
          </dl>
          {meal.tags.length > 0 && (
            <div className={styles.tags}>
              {meal.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
          {meal.youtube && (
            <a className={styles.youtube} href={meal.youtube} target="_blank" rel="noreferrer">
              ▶ Watch on YouTube
            </a>
          )}
        </div>
      </div>

      <div className={styles.body}>
        <section className={styles.panel}>
          <h2>Ingredients</h2>
          <ul className={styles.ingredients}>
            {meal.ingredients.map((ing, i) => (
              <li key={`${ing.name}-${i}`}>
                <span>{ing.name}</span>
                <span className={styles.measure}>{ing.measure}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.panel}>
          <h2>Instructions</h2>
          <div className={styles.steps}>
            {steps.map((step, i) =>
              step.heading ? (
                <h3 key={i} className={styles.stepHeading}>
                  {step.text}
                </h3>
              ) : (
                <div key={i} className={styles.step}>
                  <span className={styles.stepNumber}>{++stepNumber}</span>
                  <p className={styles.stepText}>{step.text}</p>
                </div>
              ),
            )}
          </div>
        </section>
      </div>
    </article>
  )
}

export default DetailPage

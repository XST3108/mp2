import axios from 'axios'
import type { Ingredient, Meal } from './types'

const client = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1',
  timeout: 15000,
})

// API 返回的原始数据：所有字段都是字符串或 null
type RawMeal = Record<string, string | null>

// 把杂乱的原始数据整理成我们自己的 Meal 类型
function toMeal(raw: RawMeal): Meal {
  const ingredients: Ingredient[] = []
  for (let i = 1; i <= 20; i++) {
    const name = raw[`strIngredient${i}`]?.trim()
    if (name) {
      ingredients.push({ name, measure: raw[`strMeasure${i}`]?.trim() ?? '' })
    }
  }
  return {
    id: raw.idMeal ?? '',
    name: raw.strMeal ?? 'Unknown',
    category: raw.strCategory ?? 'Unknown',
    area: raw.strCountry || raw.strArea || 'Unknown',
    thumb: raw.strMealThumb ?? '',
    instructions: raw.strInstructions ?? '',
    tags: raw.strTags ? raw.strTags.split(',').map((t) => t.trim()).filter(Boolean) : [],
    youtube: raw.strYoutube ?? '',
    ingredients,
  }
}

// 缓存：整个应用只请求一次，之后切换页面直接用缓存
let cache: Promise<Meal[]> | null = null

// API 没有"获取全部"的接口，所以按首字母 a-z 各请求一次再合并
export function fetchAllMeals(): Promise<Meal[]> {
  if (!cache) {
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
    cache = Promise.all(
      letters.map((letter) =>
        client.get<{ meals: RawMeal[] | null }>('/search.php', { params: { f: letter } }),
      ),
    )
      .then((responses) => {
        const byId = new Map<string, Meal>()
        for (const res of responses) {
          for (const raw of res.data.meals ?? []) {
            const meal = toMeal(raw)
            byId.set(meal.id, meal)
          }
        }
        return [...byId.values()]
      })
      .catch((err) => {
        cache = null // 失败了就清掉缓存，下次可以重试
        throw err
      })
  }
  return cache
}

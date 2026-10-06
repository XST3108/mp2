export interface Ingredient {
  name: string
  measure: string
}

export interface Meal {
  id: string
  name: string
  category: string
  area: string
  thumb: string
  instructions: string
  tags: string[]
  youtube: string
  ingredients: Ingredient[]
}

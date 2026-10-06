// 从列表页/画廊页跳到详情页时，把"当前看到的列表顺序"一起带过去，
// 详情页的上一个/下一个就按这个顺序切换。
export interface DetailNavState {
  ids: string[]
}

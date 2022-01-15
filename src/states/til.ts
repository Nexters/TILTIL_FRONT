import { atom } from 'recoil'

export const tilState = atom({
  key: 'til',
  default: '할 일 없음',
})
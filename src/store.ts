import { reactive } from 'vue'

export type BasicInfo = {
  cardNumber: string;
  name: string;
  dateOfBirth: string;
  department: string;
  date: string;
}

export type CardInfo = {
  id: number;
  specimen: string;
}

export type Store = {
  basicInfo: BasicInfo,
  cards: CardInfo[]
}
export const store : Store = reactive({
  basicInfo: {
    cardNumber: "",
    date: "",
    dateOfBirth: "",
    department: "",
    name: ""
  },
  cards: []
})
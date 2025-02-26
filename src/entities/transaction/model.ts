import { TransactionType } from "@/shared/types/transactionTypes"

export interface Transaction {
  id: string
  amount: number
  category: string
  date: string // ISO формат (YYYY-MM-DD)
  type: TransactionType
  comment?: string
}

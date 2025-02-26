export type TransactionType = 'income' | 'expense'

export interface Transaction {
  id: string
  amount: number
  category: string
  date: string // ISO формат (YYYY-MM-DD)
  type: TransactionType
  comment?: string
}

import { TransactionType } from '@/shared/types/transactionTypes'

export interface Category {
  id: string
  name: string
  type: TransactionType
}

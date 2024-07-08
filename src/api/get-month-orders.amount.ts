import { api } from '@/lib/axios'

export interface GetMonthOrdersAmount {
  amount: number
  diffFromLastMonth: number
}

export const getMonthOrdersAmount = async () => {
  const response = await api.get<GetMonthOrdersAmount>(
    '/metrics/month-orders-amount',
  )

  return response.data
}

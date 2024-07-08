import { api } from '@/lib/axios'

export interface GetDayOrdersAmount {
  amount: number
  diffFromYesterday: number
}

export const getDayOrdersAmount = async () => {
  const response = await api.get<GetDayOrdersAmount>(
    '/metrics/day-orders-amount',
  )

  return response.data
}

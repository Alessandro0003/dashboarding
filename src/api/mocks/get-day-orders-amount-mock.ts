import { http, HttpResponse } from 'msw'

import { GetDayOrdersAmount } from '../get-day-order-amount'

export const getDayOrdersAmountMock = http.get<
  never,
  never,
  GetDayOrdersAmount
>('/metrics/day-orders-amount', async () => {
  return HttpResponse.json({
    amount: 20,
    diffFromYesterday: -5,
  })
})

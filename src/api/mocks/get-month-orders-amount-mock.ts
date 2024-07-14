import { http, HttpResponse } from 'msw'

import { GetMonthOrdersAmount } from '../get-month-orders.amount'

export const getMonthOrdersAmountMock = http.get<
  never,
  never,
  GetMonthOrdersAmount
>('/metrics/month-orders-amount', async () => {
  return HttpResponse.json({
    amount: 200,
    diffFromLastMonth: 7,
  })
})

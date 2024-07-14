import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrdersDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', async ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '1231231231231',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 7000,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        product: { name: 'Pizza Strogonoff' },
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInCents: 2000,
        product: { name: 'Pizza Prestigio' },
        quantity: 3,
      },
    ],
  })
})

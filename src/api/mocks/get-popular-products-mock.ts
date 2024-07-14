import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', async () => {
  return HttpResponse.json([
    { product: 'Pizza de Calabresa', amount: 5 },
    { product: 'Pizza de Peperone', amount: 4 },
    { product: 'Pizza de Strogonoff', amount: 3 },
    { product: 'Pizza de Fritas', amount: 8 },
    { product: 'Pizza de Portuguesa', amount: 10 },
  ])
})

import { api } from '@/lib/axios'

interface GetProfileResponse {
  id: string
  role: 'manager' | 'customer'
  email: string
  name: string
  phone: string | null
  createdAt: Date | null
  updatedAt: Date | null
}

export const getProfile = async () => {
  const response = await api.get<GetProfileResponse>('/me')

  return response.data
}

import { API } from './constans'

export const fetchData = async (query, variables = {}) => {
  const res = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  return await res.json()
}

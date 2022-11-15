export const getUrls = async () => {
  const response = await fetch('http://localhost:3001/api/v1/urls')
  const data = await response.json()
  return data
}

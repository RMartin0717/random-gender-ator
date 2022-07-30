export const getWords = async (word) => {
  const response = await fetch(`https://the-random-gender-ator-api.herokuapp.com/api/v1/${word}`, {
	"method": "GET",
})
  const data = await errorHandler(response);
  return data
}

export const errorHandler = (response) => {
  if (!response.ok) {
    throw new Error(response.message)
  } else {
    return response.json()
  }
}

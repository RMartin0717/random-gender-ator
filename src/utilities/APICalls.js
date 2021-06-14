export const getWords = async (word) => {
  const response = await fetch(`https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=${word}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "2f02989ae5msh427de8f8ba15f4ep120743jsn069d9b1838e3",
		"x-rapidapi-host": "twinword-word-associations-v1.p.rapidapi.com"
	}
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

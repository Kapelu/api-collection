export interface Simpson {
  id: number
  name: string
  age: number
  occupation: string
  status: string
  image: string
  url: string
  phrase: string
}

export interface SimpsonDetail {
  id: number
  name: string
  age: number
  description: string
  portrait_path: string
}

const API_URL = 'https://thesimpsonsapi.com/api/characters'
const IMAGE_URL = 'https://cdn.thesimpsonsapi.com/500'

// LISTA
export async function getSimpsons(): Promise<Simpson[]> {
  const response = await fetch(API_URL, {
    next: { revalidate: 3600 },
  })

  if (!response.ok) throw new Error('Error obteniendo personajes')

  const data = await response.json()

  return data.results.map((character: any) => ({
    id: character.id,
    name: character.name,
    age: character.age,
    occupation: character.occupation,
    status: character.status,
    image: `${IMAGE_URL}${character.portrait_path}`,
    url: `${API_URL}/${character.id}`,
    phrase: character.phrases?.[0] ?? 'Sin frase',
  }))
}

// DETALLE POR ID
export async function getSimpsonById(id: number): Promise<SimpsonDetail> {
  const res = await fetch(`${API_URL}/${id}`)

  if (!res.ok) throw new Error('Error obteniendo personaje')

  const data = await res.json()

  return {
    id: data.id,
    name: data.name,
    age: data.age,
    description: data.description ?? 'Sin descripción',
    portrait_path: data.portrait_path,
  }
}

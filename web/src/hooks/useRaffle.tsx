import { useEffect, useState } from "react"
import { database } from "../services/firebase"

type FirebaseContent = Record<
  string,
  {
    title: string

    author: {
      name: string
      avatar: string
    }
    content: {
      price: string
      category: string
      phoneNumber: string
      numbersOfRaffles: string
    }
  }
>

type RaffleType = {
  id: string
  title: string

  author: {
    name: string
    avatar: string
  }
  content: {
    price: string
    category: string
    phoneNumber: string
    numbersOfRaffles: string
  }
}

export function useRaffle() {
  const [raffles, setRaffles] = useState<RaffleType[]>([])
  const [title, setTitle] = useState("")

  useEffect(() => {
    const raffleRef = database.ref(`raffles`)

    raffleRef.once("value", (raffle) => {
      const databaseRaffle = raffle.val()
      const firebaseContent: FirebaseContent = databaseRaffle ?? {}

      const parsedRaffles = Object.entries(firebaseContent).map(
        ([key, value]) => {
          return {
            id: key,
            title: value.title,
            content: value.content,
            author: value.author,
          }
        }
      )

      setTitle(databaseRaffle.title)
      setRaffles(parsedRaffles)
    })
  }, [raffles])

  return { raffles, title }
}

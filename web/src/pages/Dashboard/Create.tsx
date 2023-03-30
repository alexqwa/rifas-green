import { useState, useEffect } from "react"
import { MaskedInput } from "../../components/MaskedInput"

export function Create() {
  const [address, setAddress] = useState("")

  return (
    <>
      <MaskedInput
        className="bg-white border border-rifas-line rounded-xl h-[52px] py-3 px-4 outline-none m-20"
        placeholder="00000-000"
        mask="99999-999"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />
    </>
  )
}

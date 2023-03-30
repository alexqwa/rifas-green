import InputMask, { Props } from "react-input-mask"

interface InputProps extends Props {}

export function MaskedInput({ onChange, value, ...rest }: InputProps) {
  return <InputMask {...rest} value={value} onChange={onChange} />
}

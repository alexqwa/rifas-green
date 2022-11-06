import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  w: string
  h: string
}

export function Button({ title, w, h, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`w-${w} h-${h} rounded-lift bg-violet-500/80 hover:bg-violet-500 transition-colors disabled:cursor-not-allowed disabled:bg-violet-600`}
    >
      <span className="text-sm font-bold text-white uppercase">{title}</span>
    </button>
  )
}

import { InputHTMLAttributes, ReactNode } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode
}

export function Input({ children, ...rest }: InputProps) {
  return (
    <div className="w-full rounded-[5px] box-border border-2 border-rifas-border-line transition-colors focus-within:border-violet-500">
      <div className="flex items-center">
        <div className="relative flex-1">
          {children}
          <input
            className="w-full h-[50px] text-sm bg-zinc-900 rounded-lift pr-[1em] pl-11 focus:outline-0 text-white placeholder:text-white/70"
            {...rest}
          />
        </div>
      </div>
    </div>
  )
}

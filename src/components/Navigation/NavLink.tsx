import { AnchorHTMLAttributes } from "react"

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string
  to: string
}

export function NavLink({ name, to, className, ...rest }: NavLinkProps) {
  return (
    <>
      <a {...rest} className={`opacity-80 transition-opacity hover:opacity-100 ${className}`} href={to} >{name}</a>
    </>
  )
}
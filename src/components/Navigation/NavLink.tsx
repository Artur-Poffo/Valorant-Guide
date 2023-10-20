import { AnchorHTMLAttributes } from "react"

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string
  to: string
}

export function NavLink({ name, to, className }: NavLinkProps) {
  return (
    <>
      <a className={`opacity-80 transition-opacity hover:opacity-100 ${className}`} href={to} >{name}</a>
    </>
  )
}
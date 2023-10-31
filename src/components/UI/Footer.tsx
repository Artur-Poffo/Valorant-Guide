import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full p-4 bg-brand-gray-800 flex justify-center" >
            <Link className="text-brand-white-300 underline underline-offset-4 transition-opacity hover:opacity-70" href={"https://valorant-guide.vercel.app"} >Código fonte no GitHub</Link>
        </footer>
    )
}
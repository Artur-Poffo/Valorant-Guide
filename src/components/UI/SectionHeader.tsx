interface HeaderSectionProps {
    title: string
}

export function HeaderSection({ title }: HeaderSectionProps) {
    return (
        <header className="text-center py-5" >
            <h1 className="text-5xl uppercase text-brand-red-500 font-sans font-bold" >{title}</h1>
        </header>
    )
}
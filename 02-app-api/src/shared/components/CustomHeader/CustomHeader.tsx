
interface Props {
    title: string;
    description: string;
}

export const CustomHeader = ({ title, description = 'Search ...' }: Props) => {
    return (
        <>
            <header className="content-center">
                <h1>{title}</h1>
                <p>{description}</p>
            </header>
        </>
    )
}
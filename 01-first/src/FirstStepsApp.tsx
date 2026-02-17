import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemCounterProps {
    productName: string;
    quantity: number;
}

const products: ItemCounterProps[] = [
    { productName: 'Product 1', quantity: 1 },
    { productName: 'Product 2', quantity: 2 },
    { productName: 'Product 3', quantity: 3 },
];

export function FirstStepsApp() {
    return (
        <>
            <section>
                <h1>Hola Mundo</h1>
                <p>Este es mi primer componente</p>
                <button>Click me</button>
                <div>
                    <h2>Titulo</h2>
                    <p>Parrafo</p>
                </div>
                {products.map((product) => (
                    <ItemCounter key={product.productName} productName={product.productName} quantity={product.quantity} />
                ))}
            </section>
        </>
    )
}
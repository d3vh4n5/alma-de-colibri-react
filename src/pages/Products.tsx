import ProductsContainer from "../modules/products/ProductsContainer"

export default function Products () {
    return (
        <>
            <section>
                <h2>Productos:</h2>
                <div>
                    Productos en lugar de ser una página, será un boton dropdown
                    que mostrará las categorías y sus productos, ej:

                    <ul>
                        <li>
                            Semillas:
                            <ul>
                                <li>semilla</li>
                                <li>semilla</li>
                                <li>semilla</li>
                                <li>semilla</li>
                            </ul>
                        </li>
                        <li>
                            Frutos secos:
                            <ul>
                                <li>Frutos</li>
                                <li>Frutos</li>
                                <li>Frutos</li>
                                <li>Frutos</li>
                            </ul>
                        </li>
                        <li>
                            Elaborados:
                            <ul>
                                <li>Pizzas</li>
                                <li>otra cosa</li>
                                <li>otra cosa</li>
                                <li>otra cosa</li>
                            </ul>
                        </li>
                        <li>
                            Snacks:
                            <ul>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                            </ul>
                        </li>
                        <li>
                            Combos:
                            <ul>
                                <li>europeo</li>
                                <li>energetico</li>
                                <li>item</li>
                                <li>item</li>
                            </ul>
                        </li>
                        <li>
                            Barras de cereal:
                            <ul>
                                <li>europeo</li>
                                <li>energetico</li>
                                <li>item</li>
                                <li>item</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <ProductsContainer />
            </section>
        </>
    )
}
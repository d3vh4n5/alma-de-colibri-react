import SimpleDocLayout from "./layouts/SimpleDocLayout"


const About = () => {
  return (
    <SimpleDocLayout>


                <h2>Quénes Somos</h2>
                <p>
                    <em>Alma de colibrí</em> es una <strong>empresa familiar</strong> dedicada 
                    a la venta de los mejores <em>frutos secos</em> y productos relacionados 
                    en la ciudad de Campana. 
                    Desde nuestros inicios, nos hemos comprometido con la calidad, frescura y 
                    variedad de nuestros productos para ofrecer a nuestros 
                    clientes una experiencia única, saludable y deliciosa.
                </p>
                <h3 className="text-xl font-bold">Nuestra Misión:</h3>
                <p>
                    En <strong>Alma de Colibrí</strong>, nuestra misión es 
                    ofrecer frutos secos de alta calidad, frescos y sabrosos, 
                    directamente a nuestros clientes locales. Valoramos la 
                    autenticidad y el cuidado en cada paso del proceso, desde 
                    la selección de los mejores frutos secos hasta el servicio 
                    al cliente excepcional que brindamos en cada compra.
                </p>
                <h3 className="text-xl font-bold">Nuestros productos:</h3>
                <p>
                    Disponemos de una amplia gama de productos que incluyen:
                </p>
                <ul>
                    <li>
                    Frutos secos naturales y tostados: almendras, nueces, avellanas, entre otros.
                    </li>
                    <li>
                    Mezclas especiales y snacks saludables.
                    </li>
                    <li>
                    Frutas deshidratadas y semillas.
                    </li>
                    <li>
                    Productos a granel y envasados para satisfacer todas las necesidades y gustos.
                    </li>
                </ul>
                <h3 className="text-xl font-bold">
                Nuestra Filosofía:
                </h3>
                <p>
                En <strong>Alma de Colibrí</strong>, creemos en la importancia de una alimentación 
                saludable y deliciosamente equilibrada. Por eso, nos esforzamos por 
                ofrecer productos frescos y de calidad que contribuyan al bienestar 
                de nuestros clientes y sus familias.
                </p>

                <hr />

                <p>
                ¡Gracias por confiar en nosotros como tu elección para disfrutar de los mejores frutos secos en Campana!
                </p>

                <p>
                Atentamente,
                </p>
                <p>
                El Equipo de <em>Alma de colibrí</em>
                </p>

                
    </SimpleDocLayout>
  )
}

export default About
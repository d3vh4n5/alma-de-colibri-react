import Carrousel from "../modules/home/Carrousel"

const images: string[] = [
  '/banners/1.webp',
  '/banners/2.webp',
  '/banners/3.webp',
]

const Home = () => {
  return (
    <>
    <section>
      <code>Carrousel</code>
      <Carrousel images={images}/>

      <article>
        Novedades
      </article>
      <article>
        Destacados (Más comprados)
      </article>



    </section>

    <section>
      <div>

        <div>
          <img src="" alt="Imagen o incno representativo" />
          <div>
            <h3>Envios</h3>
            <p>
              Hacemos envíos en Camana
            </p>
          </div>
        </div>

        <div>
          <img src="" alt="Imagen o incno representativo" />
          <div>
            <h3>Pagá como quieras</h3>
            <p>
              Efectivo, tarjets de crédito - débito, transferecias, MercadoPago
            </p>
          </div>
        </div>

        <div>
          <img src="" alt="Imagen o incno representativo" />
          <div>
            <h3>Descuentos</h3>
            <p>
              10%OFF abonando en Efectivo y 5%OFF en pago por Transferencia
            </p>
          </div>
        </div>

      </div>
    </section>

    <section>
      <p>
        NEWSLETTER
      </p>
      <h2>Recibí nuestras ofertas</h2>
      <p>
        Podes registrarte y suscribirte a nuestro News Letter para enterarte
        de nuestras ofertas!
      </p>
      <button>Registrarse</button>
    </section>

    </>
  )
}

export default Home

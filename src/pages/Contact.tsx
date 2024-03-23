import SimpleDocLayout from "./layouts/SimpleDocLayout"

const Contact = () => {

  const style = {
    margin: '30px 0',
    width: '100%',
    height: '40vh',
    border: '1px solid currentColor',
  }

  return (
    <SimpleDocLayout>
            <h2>
                Visitanos:
            </h2>
            <p>

                Te invitamos a conocer nuestro local en [Dirección] y 
                descubrir la frescura y variedad de nuestros frutos secos.
                Estaremos encantados de asesorarte y brindarte 
                una experiencia de compra única.
                <a href="https://maps.app.goo.gl/zCKkVFhCa6Kd1Ks68">Mapa</a>
            </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d206.32003313256052!2d-58.951632006815736!3d-34.16883593678909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1711155191192!5m2!1ses-419!2sar" style={style} loading="lazy"></iframe>
            <p>
              También podes enviarnos un mensaje a nuestro <a href="https://wa.link/yku0b8">WhatsApp </a> 
              o contactatarnos por <a href="https://www.instagram.com/almadecolibrii/">Instagram</a>
            </p>
    </SimpleDocLayout>
  )
}

export default Contact
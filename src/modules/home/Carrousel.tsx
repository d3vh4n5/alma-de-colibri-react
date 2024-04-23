import { useState, useEffect } from 'react'
type Props = {
    images: string[]
}

const Carrousel = (props: Props) => {
    const images = props.images
    const [position, setPosition] = useState(0)
    const [animated, setAnimated] = useState(true)
    const [img, setImg] = useState(images[0])

    const next = ()=>{
        setAnimated(false)
        setTimeout(()=>{
            if (position < images.length - 1){
                setPosition( position => position + 1 )
            } else {
                setPosition(0)
            }
            setTimeout(()=>{
                setAnimated(true)
            }, 100)
        }, 500)
    }

    const previous = () => {
        setAnimated(false)
        setTimeout(()=>{
            if (position !== 0){
                setPosition( position => position - 1 )
            } else {
                setPosition(images.length - 1)
            }
            setTimeout(()=>{
                setAnimated(true)
            }, 100)
    }, 500)
    }
    
    useEffect(()=>{
        setImg(images[position])
        const autoplay = setTimeout(()=>{
            next()
        }, 5000)

        return ()=> clearInterval(autoplay)
    },[position, images])

  return (
    <div>
        <div>
            <img src={img} key={img} alt="Banner img" className={`animated  ${animated ? 'fade' : ''}`} />
            <button className='bg-gray-300 p-3 mx-2' onClick={previous}>{ '<' }</button>
            <button className='bg-gray-300 p-3 mx-2' onClick={next}>{ '>' }</button>
        </div>
    </div>
  )
}

export default Carrousel
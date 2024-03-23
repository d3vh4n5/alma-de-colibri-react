import s from './simpledoclayout.module.css'

const SimpleDocLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {

    const style = {
        flex: '1',
        background: '#e7e7e7',
        width: '100%'
    }

  return (
    <>
        <section style={style}>
            <article className={s.article}>
                {children}
            </article>
        </section>
    </>
  )
}

export default SimpleDocLayout
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const BaseLayout = ({
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
        <Header />
            <main style={style}>
                {children}
            </main>
        <Footer />
    </>
  )
}

export default BaseLayout
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import './globals.css'


function layout({children}) {
  return (
  <html>
    <body>
      <Navbar />
      {children}
      <Footer />
    </body>
  </html>
  )
}

export default layout
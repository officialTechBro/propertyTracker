import '@/assets/styles/globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'


export const metadata = {
    title: 'Modern Property | Buy and Rent Properties',
    description: 'Buy and rent your dream properties',
    keywords: 'buy, rent, house, property, find, rentals'
}

const MainLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </body>
    </html>
  )
}

export default MainLayout
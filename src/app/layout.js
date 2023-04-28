import './globals.css'
import MainNav from "@/app/(Components)/MainNav/page";

export const metadata = {
  title: 'UiCode',
  description: 'Cross Platform UI Customizer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{display:"flex", width:'100vw', height:'100vh', overflow:'hidden'}}>
        <nav style={{width:300, backgroundColor:'#d5d7da'}}>
            <MainNav/>
        </nav>
        <main style={{padding:'10px 30px', width:'100%'}}>
            {children}
        </main>
      </body>
    </html>
  )
}

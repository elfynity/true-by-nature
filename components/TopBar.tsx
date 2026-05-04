import { SITE_SLOGAN } from "@/lib/config"
import { TopIcons } from "./topIcons"

export const TopBar = () => {
  
  return (
  <>  
    <div id="topBarContainer">
      <div className="wrapper">

        <div id="topBar">

          <div id="slogan">
            <p>{SITE_SLOGAN}</p>
          </div>

          <div id="topIcons">
            <TopIcons url="tel:+27824960643" img="phone.svg" title="phone" />

            <TopIcons url="https://wa.me/27824960643" img="whatsapp.svg" title="whatsapp" />

            <TopIcons url="mailto:+soaps@truebynature.co.za" img="email.svg" title="email" />



          </div>

        </div>{/* topbar */}  

      </div>{/* wrapper */}
    </div>{/* topbar */}
  </>  
  )
  
}

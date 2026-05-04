import { SITE_NAME } from "@/lib/config";


export const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <>

    <footer>
      <div id="copyright" className="wrapper">
        <p>&copy; Copyright {SITE_NAME} {currentYear} </p>
      </div>{/* wrapper */}  
    </footer>{/* copyright */}

    </>
  );
}
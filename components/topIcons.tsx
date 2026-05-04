import Image from "next/image"
import Link from "next/link"

export const TopIcons = ({url, img, title}: {url:string, img:string, title:string}) => {
  return(
    <>
    
    <Link href={url}>
      <Image
        className="topIcons"
        src={"/icons/" + img}
        alt={title}
        width={0}
        height={20}
        style={{
          width:'auto'
        }}

      />
    </Link>

    </>
  )
} 
import Link from "next/link";
import style from "@/styles/Index.module.css";
type HrefType={
    href:string
    text:string
}
export default function Href({href, text}:HrefType){
    return (
        <Link href={href} className={style.link} >
            {text}
        </Link>
    )
}

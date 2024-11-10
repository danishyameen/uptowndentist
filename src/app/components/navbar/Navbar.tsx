import Image from "next/image";
import Logo from "@/app/img/logo-new.gif"
import Button from "../buttons/Button";
import Link from "next/link";


// import styles from "./page.module.css";



export default function Navbar(){
    return(
        
            <nav className="navbar">
                <div className="logo">
                    <Image src={Logo} alt="logo"/>
                </div>
                
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/gallery">Gallery</Link></li>
                        <li><Link href="/service">Services</Link></li>
                        <li><Button text="CONTACT US"/></li>
                    </ul>
                
            </nav>
        
    )
}
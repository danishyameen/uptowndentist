import Image from "next/image";
import Logo from "@/app/img/logo-new.gif"
export default function Footer() {
    return (
        <footer className="footer">
            {/* <div className="container">
                <div>
                    <div className="footerLogo">
                        <Image src={Logo} alt="logo" />
                    </div>
                    <p>Dr. Sharma offers the convenience and efficiency of a single provider practice and uncommon accessibility for all her patients. Since patients are only seen by one Dentist.</p>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div> */}
            <div className="subFooter">
                <p>Copyright © 2020 Uptown Dentistry - All Rights Reserved.</p>
            </div>
        </footer>
    )
}
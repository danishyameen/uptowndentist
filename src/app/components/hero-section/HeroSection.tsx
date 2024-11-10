import Image from "next/image";
import barnnerImg from "@/app/img/banner.png"
import sectionImage from "@/app/img/white-bdr.png"
export default function HeroSection(){
    return(
        <section className="heroSection">
            <Image src={barnnerImg} alt="barnnerImage"/>
            <div className="sectionContent">
                <h1 >A DENTIST FOR THE WHOLE FAMILY</h1>
                <Image src={sectionImage} alt="img"/>
                <p>We can help everyone in your family from the youngest to the oldest member.</p>
            </div>
        </section>
        
    )
}
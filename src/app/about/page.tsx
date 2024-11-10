import Image from "next/image";
import Button from "../components/buttons/Button";
import sectionImage from "@/app/img/red-bdr.png"
import specialistsectionImage1 from "@/app/img/specialist-1.png"
import specialistsectionImage2 from "@/app/img/specialist-2.png"
import specialistsectionImage3 from "@/app/img/specialist-3.png"
export default function AboutPage() {
    return (
        <section className="container aboutPage">
            <div className="aboutPageContent">
                <h1>ABOUT US</h1>
                <p>Dr. Sharma offers the convenience and efficiency of a single provider practice and uncommon accessibility for all her patients. Since patients are only seen by one Dentist, they receive a continuity of care and high level of personal Dental attention seldom experienced in larger practices. This family home-based practice enables patients to resolve Dental issues in one location without the additional expense and time of traveling to other Dental Specialists.</p>
                <div className="learnMoreBtn">
                    <Button text="Learn More" />
                </div>
            </div>
            <div className="specialistContent">
                <div className="aboutPageContent">
                    <h1>OUR SPECIALISTS</h1>
                    <Image className="sectionImage" src={sectionImage} alt="img" />
                    <p>Your text goes here. this is just placeholder content. your text goes here.this is just placeholder content.</p>
                </div>
                <div className="specialist">
                    <div><Image src={specialistsectionImage1} alt="specialistimg" /></div>
                    <div><Image src={specialistsectionImage2} alt="specialistimg" /></div>
                    <div><Image src={specialistsectionImage3} alt="specialistimg" /></div>
                </div>
            </div>

        </section>
    )
}


{/* <div className="aboutPageContent">
    <Image src={DentistImg} alt="dentistImg" />
    <div className="content">
        <h1>NEW PATIENTS ARE WELCOME</h1>
        <Image src={sectionImage} alt="img" />
        <ul>
            <li>Known for our relaxed atmosphere, our patients really do enjoy going to our dentist.</li>
            <li>Absolutely no pressure to do treatment you are not comfortable with.24/7 emergency care provided</li>
            <li>Friendly, knowledgeable staff with many years of expertise.</li>
            <li>Evening and weekend appointments are available.</li>
            <li>We accept most insurance plans.</li>
        </ul>
    </div>
</div> */}
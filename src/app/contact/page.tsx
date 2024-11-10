import Image from "next/image";
import sectionImage from "@/app/img/red-bdr.png";
import Button from "../components/buttons/Button";
import Form from "../components/form/Form";
import { FaRegEnvelope, FaRegUserCircle } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { TbWorldWww } from "react-icons/tb";

export default function ContactPage() {
    return (
        <section className="container">

            <div className="contactPageContent">
                <h1>LET'S CONTACT WITH US</h1>
                <Image className="sectionImage" src={sectionImage} alt="img" />
                <p>Dr. Sharma offers the convenience and efficiency of a single provider practice and uncommon accessibility for all her patients. Since patients are only seen by one Dentist, they receive a continuity of care and high level of personal Dental attention seldom experienced in larger practices. This family home-based practice enables patients to resolve Dental issues in one location without the additional expense and time of traveling to other Dental Specialists.</p>
                <Button text="BOOK AN APPOINTMENT" />
            </div>

            <div className="contactPage">
                <div className="contactPageFlex">

                    <div className="contactDetailsContent">
                        <div className="icon">
                            <FaRegUserCircle color="#ed143d" size="25px" />
                        </div>
                        <div className="contactDetails">
                            <h2 className="">Name</h2>
                            <p className="">Uptown Dentists</p>
                        </div>
                    </div>

                    <div className="contactDetailsContent">
                        <div className="icon">
                            <SlLocationPin color="#ed143d" size="25px" />
                        </div>
                        <div className="contactDetails">
                            <h2>Address</h2>
                            <p>karachi, Sindh, Pakistan</p>
                        </div>
                    </div>

                    <div className="contactDetailsContent">
                        <div className="icon">
                            <FaRegEnvelope color="#ed143d" size="25px" />
                        </div>
                        <div className="contactDetails">
                            <h2 >Email</h2>
                            <p>uptowndentists@gmail.com</p>
                        </div>
                    </div>

                    <div className="contactDetailsContent">
                        <div className="icon">
                            <TbWorldWww color="#ed143d" size="25px" />
                        </div>
                        <div className="contactDetails">
                            <h2 >Website</h2>
                            <p>https://uptowndentists.vercel.app</p>
                        </div>
                    </div>
                </div>
                <div className="form">
                    <Form />
                </div>
            </div>

        </section>
    )
}
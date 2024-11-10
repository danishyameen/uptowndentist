import Image from "next/image";
import sectionImage from "@/app/img/red-bdr.png"
import galleryImage1 from "@/app/img/img1.png"
import galleryImage2 from "@/app/img/img2.png"
import galleryImage3 from "@/app/img/img3.png"
import galleryImage4 from "@/app/img/img4.png"
import galleryImage5 from "@/app/img/img5.png"


export default function GalleryPage() {
    return (
        <section className="container">

            <div className="galleryContent">
                <h1>GALLERY</h1>
                <Image className="sectionImage" src={sectionImage} alt="img" />
                <p>Your text goes here. this is just placeholder content. your text goes here.this is just placeholder content.</p>
            </div>

            <div className="galleryImages">

                <div className="galleryImage1">
                    <div><Image src={galleryImage1} alt="galleryImage" /></div>
                    <div><Image src={galleryImage2} alt="galleryImage" /></div>
                </div>

                <div className="galleryImage2">
                    <div><Image src={galleryImage3} alt="galleryImage" /></div>

                </div>
                <div className="galleryImage3">
                    <div><Image src={galleryImage4} alt="galleryImage" /></div>
                    <div><Image src={galleryImage5} alt="galleryImage" /></div>
                </div>
            </div>

        </section>
    )
}
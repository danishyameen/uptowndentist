type buttonType = {
    text : string;
}

import Link from "next/link";
export default function Button(props:buttonType){
    let propsBtn = props.text
    if(propsBtn === "CONTACT US"){
        return <button className="contactBtn"> 
            <Link href="/contact">{props.text}</Link>
        </button>
    } 
    else if(props.text !== "CONTACT US"){
        return <button className="contactBtn">{props.text}</button>
    }
    return(
        <div>
            {propsBtn}
        </div>
    )
}

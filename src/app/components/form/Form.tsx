// import { FormButton } from "../button/Button"

import Button from "../buttons/Button";



export default function Form() {
    return (
        <div className="formContent">
            <form action="" className="form">
                <div className="formSection">
                    <input className="" type="text" name="name" id="" placeholder="name" />
                    <br />
                    <input className="" type="text" name="email" id="" placeholder="email" />
                    <br />
                    <textarea className="" name="" id="" placeholder="Describe Project Details"></textarea>
                    <div className="submitBtn">
                        <Button text="SUBMIT" />
                    </div>
                </div>


            </form>
        </div>
    )
}
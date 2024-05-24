import  {useState, Fragment} from "react";
import Button from "../UI/Button";
import addstyle from './AddUser.module.css'
import Card from "../UI/Card";
import ErrorModel from "../UI/ErrorModel";


const AddUser = (props) => {
    const [enterName, setenterName] = useState('')
    const [entAddress, setenterAddress] = useState('')
    const [enterPhoneline, setenterPhoneline] = useState()
    const [enterDate, setenterDate] = useState('')
    const [enterMail, setenterMail] = useState('')
    const [error, seterror] = useState()


    const formHandler = (event) => {
        event.preventDefault();
        if (enterName.trim().length === 0 || entAddress.trim().length === 0 || enterDate.trim().length === 0 || enterMail.trim().length === 0 || enterPhoneline.trim().length === 0) {
            seterror({
                title: 'Invalid Input',
                message: 'Please fill all the Form'
            })
            return
        }
        
        

        
        props.onAddUser(enterName, entAddress, enterPhoneline, enterDate, enterMail);
        setenterName('')
        setenterAddress('')
        setenterDate('')
        setenterPhoneline('')
        setenterMail('')


    
    }
    const NameHandler = (event) => {
        setenterName(event.target.value)
    }
    

    const AddressHandler = (event) => {
        setenterAddress(event.target.value)
    }
    const PhonelineHandler = (event) => {
        setenterPhoneline(event.target.value)
    }
    const DateHandler = (event) => {
        setenterDate(event.target.value)
    }
    const GmailHandler = (event) => {
        setenterMail(event.target.value)

    }

    const errorHandler = () => {
        seterror(null)
    }
    

    return (
        <Fragment>
            {error && (
                <ErrorModel
                    title={error.title} message={error.message} onConfirm={errorHandler} />

            )}
            <Card className={addstyle.input}>
                <h2>FORM</h2>
                <form onSubmit={formHandler}>
                    <label htmlFor="label_name">Your Name</label>
                    <input type="text" placeholder="enter your name" value={enterName} onChange={NameHandler} />
                    
                    <label htmlFor="label_addres">Your Address</label>
                    <input type="text" placeholder="your aress" value={entAddress} onChange={AddressHandler} />
                    <label htmlFor="label_phone">Phone Number</label>
                    <input type="number" placeholder="your phone number" value={enterPhoneline} onChange={PhonelineHandler} />
                    <label htmlFor="label_birth">Date of Birth</label>
                    <input type="date" value={enterDate} onChange={DateHandler} />
                    <label>Your Email</label>
                    <input type="mail" value={enterMail} onChange={GmailHandler}></input>
                    <Button type='submit'>Add List</Button>



                </form>


            </Card>
           


        </Fragment>

    )
    
}
export default AddUser;
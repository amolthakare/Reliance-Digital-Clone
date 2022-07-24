import React from 'react';
import { Link } from 'react-router-dom';
import style from '../ContactUs/Contact.module.css';
import { useToast,Button } from '@chakra-ui/react'

const Contact = () => {
    const toast = useToast()
    return (
        <div>
            <div className={style.contactUs}>
                <h1>How Can We Help you?</h1>
                <p>Send us a text: 183-578-236</p>
                <p>Give us a call: 192-122-9776</p>
                <p>Monday - Saturday 7AM - 6PM PST</p>
                <div className={style.mb3}>
                    <label for="exampleFormControlTextarea1" class="form-label">Tell Us Your Query</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                {/* <button type="button" class="btn btn-secondary btn-lg"><Link to="/">SUBMIT</Link></button> */}
                    <Button onClick={() =>toast({title: 'Query has been Submitted',status: 'success',duration: 1000,isClosable: true,})}><Link to="/">SUBMIT</Link></Button>
            </div>
        </div>
    )
}

export default Contact
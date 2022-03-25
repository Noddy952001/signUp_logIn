import { async } from "@firebase/util";
import React, { useState } from "react";
import {Form, Alert } from "react-bootstrap"
import {Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import { useUserAuth } from "./ProtectedRoute";


 export const Signup = () => {

    const [email , setEmail] = useState("")
    const [password , setpassword] = useState("")
    const {signup} = useUserAuth();
    const [error , setError]  = useState("");

    const handelSubmit = async (e)  => {
        e.preventDefault();
        setError("");
        try{
            await  signup(email , password);
        }
        catch (err){
            setError(err.message)
        }

    }
 
    return (
        <div>

            <h1>User Signup</h1>

            {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handelSubmit}>
                    <Form.Group>
                        <Form.Control type="email" placeholder="Enter e-mail"  onChange={(e) => setEmail(e.target.value)}/> <br/>
                        <Form.Control type="password" placeholder="Enter Password" onChange={(e) => setpassword(e.target.value)} />
                     </Form.Group>
                        <div>

                            <Button
                              variant="primary" type="submit" >
                                Sign up
                            </Button>
                        </div>

                        <div>
                            Already have an account <Link to="/Login">Log In </Link>
                        </div>

                </Form>
        </div>
    )
}


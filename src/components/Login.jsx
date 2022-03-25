import React from "react";
import {Form} from "react-bootstrap"
import {Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import {GooglButton} from "react-google-button"


 export const Login = () => {
    return (
        <div>

            <h1>User Login</h1>
                <Form>
                        <Form.Control type="e-mail" placeholder="Enter e-mail" /> <br/>
                        <Form.Control type="password" placeholder="Enter Password" />

                        <div>

                            <Button
                              variant="primary" type="submit" 
                            >
                                    Log In
                            </Button>
                        </div>

                        <div>
                            Donn't have account <Link to="/Signup">Sign up</Link>
                        </div>

                </Form>
        </div>
    )
}


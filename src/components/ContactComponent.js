import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";


function Contact(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                   
                    
                </div>
            </div>

            <div className="row">
            <MDBContainer>
                        <MDBRow>
                            <MDBCol md="6">
                                <form>
                                
                                    <h3 className="text-center">Write to us</h3>

                                    <div className="grey-text">
                                        <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                                            success="right" />
                                        <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                                            success="right" />
                                        <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
                                        <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
                                    </div>
                                    <div className="text-center">
                                        <MDBBtn outline color="secondary">
                                            Send
            <MDBIcon far icon="paper-plane" className="ml-1" />
                                        </MDBBtn>
                                    </div>
                                </form>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>

            </div>

            <div className="row row-content align-items-center">
                <div className="col-sm-4">
                    <h5>Our Address</h5>
                    <address>
                        1 Nucamp Way<br />
                        Seattle, WA 98001<br />
                        U.S.A.
                    </address>
                </div>
                <div className="col">
                    <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone"></i> 1-206-555-1234</a><br />
            
                </div>
            </div>
        </div>
    );
}

export default Contact;
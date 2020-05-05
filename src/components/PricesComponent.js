import React from 'react';
import { Card, CardTitle, CardSubtitle, CardText, CardDeck, CardGroup, CardBody, Breadcrumb, BreadcrumbItem, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';

function Prices(props) {

    const price = props.prices.map(price => {

        return (
            <div key={price.id} className=".col-md-4 m-1">
                <RenderPriceItem price={price} />
            </div>

        );

    });

    return (
        <div className="container">

            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Price</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>price List</h2>
                    <h3>Please contact us for our Live Streaming prices!</h3>
                    <br />

                </div>
            </div>

            <div className="row">
                {price}
                <br></br>

            </div>


        </div>


    );


}

function RenderPriceItem({ price }) {


    return (
       
            <CardGroup>
                <Card style={{ width: 350 }}>
                    <CardHeader className="text-center">{price.name}</CardHeader>
                    <CardBody className="text-center">
                     
                        <CardSubtitle>{price.price}</CardSubtitle>
                        <CardText>{price.description}</CardText>

                    </CardBody>
                </Card>

            </CardGroup>
           

    );

    

}


export default Prices;
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ListGroup } from "react-bootstrap";

export default function ExampleCards()  {
return(
    <>
    <Card style={{width: '18rem'}}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZV6YgLeNiwO5dA8ISF1jjdUSAkSPy2ng2w&s"/>
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
    <br></br>
    <Card style={{"backgroundColor": "black", color: "white"}}>
        <Card.Body>This is some tect within a card body</Card.Body>
    </Card>
    <br></br>
    <Card body>This is some text within a card body</Card>
    <Card style={{width: '18rem'}}>
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
    </Card>
    <Card style={{width: '18rem'}}>
        <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
    </Card>
    <Card style={{width: '18rem'}}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZV6YgLeNiwO5dA8ISF1jjdUSAkSPy2ng2w&s"></Card.Img>
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's context. 
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-groupflush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
    </Card>
    <hr></hr>
    <Card>
        <Card.Header>Featured</Card.Header>
       <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
       <Card.Text>
        With supporting text below as a natural leadin to additional content.
       </Card.Text>
       <Button  variant="primary">Go somewhere</Button>
       </Card.Body>
    </Card>
    <hr></hr>
    <Card>
        <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
                <Card.Title>Special tratment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
            </Card.Body>
    </Card>
    <hr></hr>
    <Card>
        <Card.Header>Quote</Card.Header>
        <Card.Body>
            <blockquote className="blockquote mb-0">
                <p>
                    {' '}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                    posuere erat a ante.{' '}
                </p>
                <footer className="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                </footer>
            </blockquote>
        </Card.Body>
    </Card>
    <hr></hr>
    <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
                With supporting text below aas a natural lead.in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
<hr></hr>
    <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZV6YgLeNiwO5dA8ISF1jjdUSAkSPy2ng2w&s"/>
        <Card.Body>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
        </Card.Body>
    </Card>
    <br></br>
    <Card>
        <Card.Body>
        <Card.Text className="text-center">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZV6YgLeNiwO5dA8ISF1jjdUSAkSPy2ng2w&s"/>

    </Card>
    </>

)
}


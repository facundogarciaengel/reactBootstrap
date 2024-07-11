import React from "react";
import { Button } from "react-bootstrap";

const ButtonPrueba = () => {
    return (
        <>
          <Button variant="primary" size="lg">Primary</Button>{' '}
          <Button variant="secondary" size="lg">Secondary</Button>{' '}
          <Button variant="success" size="lg">Success</Button>{' '}
          <Button variant="warning" size="lg">Warning</Button>{' '}
          <Button variant="danger" size="lg">Danger</Button>{' '}
          <Button variant="info" size="lg">Info</Button>{' '}
          <Button variant="light" size="lg">Light</Button>{' '}
          <Button variant="dark" size="lg">Dark</Button>
          <Button variant="link" size="lg">Link</Button>
          <hr></hr>
          <Button variant="outline-primary" size="sm">Primary</Button>{' '}
      <Button variant="outline-secondary" size="sm">Secondary</Button>{' '}
      <Button variant="outline-success" size="sm">Success</Button>{' '}
      <Button variant="outline-warning" size="sm">Warning</Button>{' '}
      <Button variant="outline-danger " size="sm">Danger</Button>{' '}
      <Button variant="outline-info" size="sm">Info</Button>{' '}
      <Button variant="outline-light" size="sm">Light</Button>{' '}
      <Button variant="outline-dark" size="sm">Dark</Button>
      <Button href="#" size="sm">Link</Button> <Button type="submit" size="sm">Button</Button>{' '}
      <Button as="input" type="button" value="Input" size="sm" />{' '}
      <Button as="input" type="submit" value="Submit" size="sm"/>{' '}
      <Button as="input" type="reset" value="Reset" size="sm" />
      <hr></hr>
      <div className="d-grid gap-2">
      <Button variant="primary" size="lg" disabled>
        Block level button
      </Button>
      <Button variant="secondary" size="lg" disabled>
        Block level button
      </Button>
      <hr></hr>
      <Button variant="primary" size="lg" block>
        Block level button
      </Button>
    </div>
        </>
      );
}

export default ButtonPrueba
import React from "react";
import { Button } from "react-bootstrap";
import { useEffect, useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';


const ButtonPrueba = () => {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 4000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  const radios = [
    {name: 'Active', value: '1'},
    {name: 'Active', value: '2'},
    {name: 'Active', value: '3'}
  ]

    return (
        <>
        <ButtonGroup className="mb-2">
          <ToggleButton
          id="togglecheck"
          type="checkbox"
          variant="secondary"
          checked={checked}
          value="1"
          onChange={(e) => setChecked(e.currentTarget.checked)}
          >
            Checked
          </ToggleButton>
        </ButtonGroup>
        <Button
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
        >{isLoading ? 'Loading...' : 'Click to load'}
        </Button>
        <hr></hr>
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
      <Button variant="primary" size="lg">
        Block level button
      </Button>
    </div>
        </>
      );
}

export default ButtonPrueba
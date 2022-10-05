import {Navbar,Form, Button, Container}  from 'react-bootstrap'





function App() {
  return (
    <div className="App">
      <Navbar bg="light">
        <Container>
          <Navbar.Brand id='text'>
           Form Checkpoint
          </Navbar.Brand>
          <Navbar.Brand>
            <Form.Check type='switch' id='switchbtn'></Form.Check> 
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container className='col-6'>
      <Form className='mt-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder='Your name here'></Form.Control>
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder='Your Last name here'></Form.Control>
      </Form.Group>
      <Form.Group className='mt-3'>
        <Form.Label>Date of birth</Form.Label>
        <Form.Control type="Date"></Form.Control>
      </Form.Group>
      <Form.Group className='mt-3'>
        <Form.Label>Password</Form.Label>
        <Form.Control type='Password' placeholder='Write a password'></Form.Control>
        <Form.Label>Re-write Password</Form.Label>
        <Form.Control type='Password' placeholder='Re-write a password'></Form.Control>
      </Form.Group>
      <Form.Group className='mt-3'>
        <Form.Label>Gender</Form.Label>
          <Form.Group>
          <div key={"inline-radio"}>
            <Form.Check type='radio' name='gender' label="Man"></Form.Check>
            <Form.Check type='radio' name='gender' label="Woman"></Form.Check>
          </div>
          </Form.Group>
      </Form.Group>
      <Form.Group className='mt-3'>
        <Form.Check name="validation" label="Did you accept our terms"></Form.Check>
      </Form.Group>
      <fieldset>
      <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
        <Button className='mt-3 mb-5'>Sign In</Button>
      </a>
      </fieldset>
      </Form>
      </Container>
    </div>
  );
}

export default App;

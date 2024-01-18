import {type FC} from 'react';
import {Navbar, Nav, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';

interface NavigationProps {

}

export const Navigation: FC<NavigationProps> = () => {
    

return (
        <>
            <Navbar bg='dark' variant='dark' expand='lg'>
                <Container fluid>
                    <Navbar.Brand>Video Game App</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                    <Navbar.Collapse>
                        <Nav variant='pills'>
                            <Nav.Item >
                                <Nav.Link 
                                    as={Link}
                                    to='/'
                                    eventKey='link-1'
                                    style={{ textAlign: 'center'}} 
                                >
                                    Home
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link 
                                    
                                    style={{ textAlign: 'center'}} 
                                    eventKey='link-2'
                                >
                                    About
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link 
                                as={Link}
                                to='/favorites'
                                eventKey='link-3'
                                style={({textAlign: 'center'})}
                                >
                                  Favorites
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    )
}

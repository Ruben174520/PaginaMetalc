import Nav from 'react-bootstrap/Nav';

function Tabs(){
    return(
        <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link eventKey="link 1">Desensamblamiento industrial</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link 1">Recoleccion de scrap</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link 1">Maquinaria recolectora</Nav.Link>
            </Nav.Item>
        </Nav>

    );
}

export default Tabs;
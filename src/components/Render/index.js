import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import ListItem from "../ListItem";

const Render = ({data}) => {
    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Value</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data ? data.map(el => <ListItem key={el.date} data={el}/>) : null}
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    );
};

export default Render;
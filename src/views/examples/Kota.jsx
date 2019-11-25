import React from "react";
import axios from "axios";

import {
    Button,
    Card,
    CardBody,
    Container,
    Row,
    Col
} from "reactstrap";

import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import CardsFooter from "components/Footers/CardsFooter.jsx";

class Kota extends React.Component {

    state = {
        kotas: [],
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/kota/')
            .then(res => {
                this.setState({kotas: res.data});   
                console.log(res.data);
            })
    }
    render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
            
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Kota;
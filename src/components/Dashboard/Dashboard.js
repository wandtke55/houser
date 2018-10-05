import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import House from '../House/House';
import axios from 'axios';


class Dashboard extends Component{
    constructor(){
        super();

        this.state = {
            houses: []
        }
        this.deleteHouse = this.deleteHouse.bind(this)
    }

    componentDidMount(){
        axios.get('/api/houses').then(res=>{
            this.setState({houses: res.data})
        })
    }

    deleteHouse(id){
        console.log(id)
        axios.delete(`/api/house/${id}`)
        .then(res=> this.setState({houses: res.data}))
    }

    render(){
        let houses = this.state.houses.map((e, index)=>{
            return(
                <House key={index} house={e} delete={this.deleteHouse}/>
                
            )
        })
        return(
            <div>
                <h1>Dashboard</h1>
                <Link to='/wizard/step1'><button>Add New Property</button></Link>
                {houses}
            </div>
        )
    }
}

export default Dashboard
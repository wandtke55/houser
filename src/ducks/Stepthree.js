import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


class Stepthree extends Component{
    constructor(){
        super();

        this.state = {
            name: '',
            address: '',
            city: '',
            st: '',
            zip: 0,
            houses: []
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleZipChange = this.handleZipChange.bind(this);
    }

    addHouse(){
        const {name, address,city,state,zip} = this.state
        console.log('parameter')
        axios.post('/api/house', {name, address, city, state, zip})
        .then(res=>{
            this.setState({houses: res.data})
        })
    }

    handleNameChange(value){
        this.setState({name: value})
    }
    handleAddressChange(value){
        this.setState({address: value})
    }
    handleCityChange(value){
        this.setState({city: value})
    }
    handleStateChange(value){
        this.setState({st: value})
    }
    handleZipChange(value){
        this.setState({zip: value})
    }

    render(){
        return(
            <div>
                <Link to='/'><button>Cancel</button></Link>
                <input type='text' placeholder='Name' onChange={(e)=> this.handleNameChange(e.target.value)}/>
                <input type='text' placeholder='Address' onChange={(e)=> this.handleAddressChange(e.target.value)}/>
                <input type='text' placeholder='City' onChange={(e)=> this.handleCityChange(e.target.value)}/>
                <input type='text' placeholder='State' onChange={(e)=> this.handleStateChange(e.target.value)}/>
                <input type='text' placeholder='Zipcode' onChange={(e)=> this.handleZipChange(e.target.value)}/>
                <Link to='/wizard/step1'><button>Step One</button></Link>
                <Link to='/wizard/step2'><button>Step Two</button></Link>
                <button onClick={()=> this.addHouse()}>Complete</button>
            </div>
        )
    }
}

export default Stepthree
import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Stepone from '../../ducks/Stepone';
import Steptwo from '../../ducks/Steptwo';
import Stepthree from '../../ducks/Stepthree';



class Wizard extends Component{

    render(){
        return(
            <div>
            <Switch>
                <Route path='/wizard/step1' component={Stepone}/>
                <Route path='/wizard/step2' component={Steptwo}/>
                <Route path='/wizard/step3' component={Stepthree}/>
            </Switch>
            </div>
        )
    }
}

export default Wizard
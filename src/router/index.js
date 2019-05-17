
import React,{Component} from "react"
import { HashRouter,Route,Switch } from "react-router-dom"
import App from "../App"
import Home from "../pages/home/index"

class Rout extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <HashRouter>
                <App>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/Home" component={Home}/>
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}


export default Rout








import React,{ Component } from "react"
import Head from "../../component/header/index"
import Download from "../../component/download/index"
import Banner from "../../component/banner/index"
import Preferential from "../../component/preferential";

class Home extends Component{

    render(){
        return(
            <div>
                <Head/>
                <div className="clear"></div>
                <Download/>
                <div className="clear"></div>
                <Banner/>
                <Preferential/>
            </div>
        )
    }

    componentDidMount(){
        let cityName = "";
        if(cityName == null){
            cityName = "北京"
        }
    }
}

export default Home
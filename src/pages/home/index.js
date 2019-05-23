

import React,{ Component } from "react"
import Head from "../../component/header/index"
import Download from "../../component/download/index"
import Banner from "../../component/banner/index"
import Preferential from "../../component/preferential";
import Love from "../../component/love"

class Home extends Component{

    render(){
        return(
            <div>
                <Head/>
                <div className="clear"></div>
                <Download/>
                <div className="clear"></div>
                <Banner/>
                <div className="clear"></div>
                <Preferential/>
                <div className="clear"></div>
                <Love/>
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


import React,{ Component } from "react"
import Head from "../../component/header/index"
import Download from "../../component/download/index"
import Banner from "../../component/banner/index"

class Home extends Component{

    render(){
        return(
            <div>
                <Head/>
                <div className="clear"></div>
                <Download/>
                <div className="clear"></div>
                <Banner/>
            </div>
        )
    }
}

export default Home
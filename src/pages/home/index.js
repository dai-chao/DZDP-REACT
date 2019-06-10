

import React,{ Component } from "react"
import Head from "../../component/header/index"
import Download from "../../component/download/index"
import Banner from "../../component/banner/index"
import Preferential from "../../component/preferential";
import Love from "../../component/love"

class Home extends Component{
constructor(props){
    super(props)
    this.state={
        name:"猜你喜欢"
    }
}

    onChange(event){
        this.setState({
            name:event.target.value
        })
    }
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
                <Love name="猜你喜欢" onChange = {this.onChange.bind(this)}>{this.state.name}</Love>    {/* 标签内容可以用 this.props.children接受收  */}
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
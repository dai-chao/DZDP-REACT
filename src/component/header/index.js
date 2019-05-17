
import React,{ Component } from "react"
import "./index.css"
export default class Head extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="henderBox">
                <header>
                    <ul>
                        <li>
                            北京
                        </li>
                        <li>
                            v
                        </li>
                        <li>
                            <input type="text" placeholder="输入商户名,地点"/>
                        </li>
                        <li  class="icon iconfont icon-fangdajing"></li>
                        <li class="icon iconfont icon-geren"></li>
                    </ul>
                </header>
            </div>
        )
    }
}
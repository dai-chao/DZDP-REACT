
import React,{ Component } from "react"
import "./index.css"
export default class Head extends Component{

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
                        <li  className="icon iconfont icon-fangdajing"></li>
                        <li className="icon iconfont icon-geren"></li>
                    </ul>
                </header>
            </div>
        )
    }
}
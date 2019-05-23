
import React,{ Component } from "react"

import "./index.css"

export default class Preferential extends Component{

    render(){
        return(
            <div className="prebox">
                <div className="pre">
                    <div className="preHead">
                        <span>超值优惠</span><span>更多优惠  ></span>
                    </div>
                    <div className="clear"></div>
                    <div className="preconcert">
                        <ul>
                            <li>
                                <img src="http://k.zol-img.com.cn/sjbbs/7692/a7691515_s.jpg" alt=""/>
                                <h3>梵高之路·成人画室美术培训</h3>
                                <h4>￥1</h4>
                            </li>
                            <li>
                                <img src="http://k.zol-img.com.cn/sjbbs/7692/a7691515_s.jpg" alt=""/>
                                <h3>皮肤/耳道/寄生虫基础健康筛查</h3>
                                <h4>￥1</h4>
                            </li>
                            <li>
                                <img src="http://k.zol-img.com.cn/sjbbs/7692/a7691515_s.jpg" alt=""/>
                                <h3>爆款！26项宠物体检</h3>
                                <h4>￥1</h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}












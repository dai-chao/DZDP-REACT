

import  React,{ Component } from "react"
import { Carousel } from 'antd';
import BScroll from "better-scroll"
import Scroll from "react-bscroll"
import "react-bscroll/lib/react-scroll.css"
import "./index.css"



export default class Banner extends Component{
    constructor(props){
        super(props);
        this.state={
            showindex:0,
            bannerList1:[
                [
                    {href:"#",title:"美食",icon:"icon iconfont icon-meishi color1"},
                    {href:"https://www.baidu.com/",title:"猫眼电影",icon:"icon iconfont icon-maoyandianying color2"},
                    {href:"#",title:"酒店",icon:"icon iconfont icon-jiudian color3"},
                    {href:"#",title:"休闲娱乐",icon:"icon iconfont icon-xiuxianyule  color4"},
                    {href:"#",title:"外卖",icon:"icon iconfont icon-waimai-copy color5"},
                    {href:"#",title:"火锅",icon:"icon iconfont icon-huoguo color6"},
                    {href:"#",title:"丽人",icon:"icon iconfont icon-neiyi color7"},
                    {href:"#",title:"购物",icon:"icon iconfont icon-xiaochikuaican color8"},
                    {href:"#",title:"周边游",icon:"icon iconfont icon-zhoubianyou color9"},
                    {href:"#",title:"KTV",icon:"icon iconfont icon-xingzhuangkaobei color10"},
                ],
                [
                    {href:"#",title:"婚纱摄影",icon:"icon iconfont icon-hunbanhunshasheyingkengwei80 color1"},
                    {href:"#",title:"生活服务",icon:"icon iconfont icon-weibiaoti-_fuzhi- color2"},
                    {href:"#",title:"景点",icon:"icon iconfont icon-jingdian color3"},
                    {href:"#",title:"爱车",icon:"icon iconfont icon-aiche  color4"},
                    {href:"#",title:"运动健身",icon:"icon iconfont icon-yundongjianshen color5"},
                    {href:"#",title:"亲子",icon:"icon iconfont icon-naiping color6"},
                    {href:"#",title:"家装",icon:"icon iconfont icon-neiyi color7"},
                    {href:"#",title:"学习培训",icon:"icon iconfont icon-xuexipeixun color8"},
                    {href:"#",title:"医疗健康",icon:"icon iconfont icon-yiliaojiankang-copy-copy color9"},
                    {href:"#",title:"到家",icon:"icon iconfont icon-daojia color10"},
                ],
                [
                    {href:"#",title:"小吃快餐",icon:"icon iconfont icon-xiaochikuaican color1"},
                    {href:"#",title:"口腔齿科",icon:"icon iconfont icon-kouqiangchike color2"},
                    {href:"#",title:"自助餐",icon:"icon iconfont icon-zizhucan color3"},
                    {href:"#",title:"日本菜",icon:"icon iconfont icon-xiuxianyule  color4"},
                    {href:"#",title:"美发",icon:"icon iconfont icon-meifa color5"},
                    {href:"#",title:"美甲美睫",icon:"icon iconfont icon-meijia color6"},
                    {href:"#",title:"美容SPA",icon:"icon iconfont icon-SPA color7"},
                    {href:"#",title:"瘦身纤体",icon:"icon iconfont icon-liren1 color8"},
                    {href:"#",title:"亲子摄影",icon:"icon iconfont icon-qinzisheying color9"},
                    {href:"#",title:"全部分类",icon:"icon iconfont icon-xingzhuangkaobei color10"},
                ]
            ],

        };
    };

    componentDidMount(){
        //console.log(this.state);
    }
    showIndex(index){
        this.setState({
            showindex:index
        })
    }
    render(){
        return(
            <div>
                <div className="bannerBox">
                    <Scroll>
                        <ul className="banner">
                            {
                                this.state.bannerList1[0].map((item,index)=>{
                                    //console.log(typeof item.href);
                                    return(
                                        <a href={item.href} key={index}>
                                            <li >
                                                <i className={item.icon}></i>
                                                <p>{item.title}</p>
                                            </li>
                                        </a>
                                    )
                                })
                            }
                        </ul>
                        <ul className="banner">
                            {
                                this.state.bannerList1[1].map((item,index)=>{
                                    return(
                                        <a href={item.href} key={index}>
                                            <li >
                                                <i className={item.icon}></i>
                                                <p>{item.title}</p>
                                            </li>
                                        </a>
                                    )
                                })
                            }
                        </ul>
                        <ul className="banner">
                            {
                                this.state.bannerList1[2].map((item,index)=>{
                                    return(
                                        <a href={item.href} key={index}>
                                            <li >
                                                <i className={item.icon}></i>
                                                <p>{item.title}</p>
                                            </li>
                                        </a>
                                    )
                                })
                            }
                        </ul>
                    </Scroll>
                    <ul className="dian">
                        {
                            this.state.bannerList1.map((item,index)=>{
                                return(
                                    <li
                                        key={index}
                                        className={ this.state.showindex === index ? "color2" :"color11"}
                                        onClick={this.showIndex.bind(this,index)}
                                     >
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
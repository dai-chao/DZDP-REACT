

import  React,{ Component } from "react"
import { Carousel } from 'antd';
import "./index.css"



export default class Banner extends Component{
    constructor(props){
        super(props);
        this.state={
            showindex:0,
            bannerList1:[
                [
                    {title:"美食",icon:"icon iconfont icon-meishi color1"},
                    {title:"猫眼电影",icon:"icon iconfont icon-maoyandianying color2"},
                    {title:"酒店",icon:"icon iconfont icon-jiudian color3"},
                    {title:"休闲娱乐",icon:"icon iconfont icon-xiuxianyule  color4"},
                    {title:"外卖",icon:"icon iconfont icon-waimai-copy color5"},
                    {title:"火锅",icon:"icon iconfont icon-huoguo color6"},
                    {title:"丽人",icon:"icon iconfont icon-neiyi color7"},
                    {title:"购物",icon:"icon iconfont icon-xiaochikuaican color8"},
                    {title:"周边游",icon:"icon iconfont icon-zhoubianyou color9"},
                    {title:"KTV",icon:"icon iconfont icon-xingzhuangkaobei color10"},
                ],
                [
                    {title:"婚纱摄影",icon:"icon iconfont icon-meishi color1"},
                    {title:"生活服务",icon:"icon iconfont icon-maoyandianying color2"},
                    {title:"景点",icon:"icon iconfont icon-jiudian color3"},
                    {title:"爱车",icon:"icon iconfont icon-xiuxianyule  color4"},
                    {title:"运动健身",icon:"icon iconfont icon-waimai-copy color5"},
                    {title:"亲子",icon:"icon iconfont icon-huoguo color6"},
                    {title:"家装",icon:"icon iconfont icon-neiyi color7"},
                    {title:"学习培训",icon:"icon iconfont icon-xiaochikuaican color8"},
                    {title:"医疗健康",icon:"icon iconfont icon-zhoubianyou color9"},
                    {title:"到家",icon:"icon iconfont icon-xingzhuangkaobei color10"},
                ],
                [
                    {title:"小吃快餐",icon:"icon iconfont icon-meishi color1"},
                    {title:"口腔齿科",icon:"icon iconfont icon-maoyandianying color2"},
                    {title:"自助餐",icon:"icon iconfont icon-jiudian color3"},
                    {title:"日本菜",icon:"icon iconfont icon-xiuxianyule  color4"},
                    {title:"美发",icon:"icon iconfont icon-waimai-copy color5"},
                    {title:"美甲美睫",icon:"icon iconfont icon-huoguo color6"},
                    {title:"美容SPA",icon:"icon iconfont icon-neiyi color7"},
                    {title:"瘦身纤体",icon:"icon iconfont icon-xiaochikuaican color8"},
                    {title:"亲子摄影",icon:"icon iconfont icon-zhoubianyou color9"},
                    {title:"全部分类",icon:"icon iconfont icon-xingzhuangkaobei color10"},
                ]
            ],

        };
    };

    componentDidMount(){
        console.log(this.state);
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
                    <ul className="banner">
                        {
                            this.state.bannerList1[0].map((item,index)=>{
                                return(
                                    <a href="#" key={index}>
                                        <li >
                                            <i className={item.icon}></i>
                                            <p>{item.title}</p>
                                        </li>
                                     </a>
                                )
                            })
                        }
                    </ul>

                    <ul className="dian">
                        {
                            this.state.bannerList1.map((item,index)=>{
                                return(
                                    <li
                                        key={index}
                                        className={ this.state.showindex === index ? "color2" :"color11"}
                                        onClick={this.showIndex.bind(this,index)}
                                     ></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
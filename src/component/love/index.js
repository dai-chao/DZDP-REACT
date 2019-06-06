

import React,{ Component ,useState} from "react"
import "./index.css"

// console.log(useState);

function Example() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}


 class Love extends Component{
    constructor(props){
        super(props);
        this.state={
            num:1
        }
    }
    handclick(){
        this.setState({
            num:this.state.num+1
        })
    }
    render(){
        return(
            <div className="txt">
                <h2>猜你喜欢</h2>
                <ul>
                    <li>
                        {this.state.num}
                        <button onClick={this.handclick.bind(this)}>点击</button>
                    </li>
                </ul>
                <Example/>
            </div>

        )
    }
}

export default Love














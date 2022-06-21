import React, { Component } from "react";
import "./Counter.css";
class Counter extends Component {
    state={
        count:0,
    };
    count=0;
    increase =() =>{
        this.setState({
           count:this.state.count +1,
        });
    };
    decrease =() =>{
        if(this.state.count !=0){
            this.setState({
                count:this.state.count -1,
             });
        }
       
    }; 
    render(){
        return(
            <section className="Counter alert alert-info text-center"> 
               <p>
                count is:  <strong className="text_primary">{this.state.count}</strong>
               </p>
               <button className="btn btn-success mx-4" onClick={this.increase}>+</button>
               <button className="btn btn-success" onClick={this.decrease}>-</button>

            </section>
        )
    }
}
export default Counter;
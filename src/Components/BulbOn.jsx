import React, {Component} from 'react'

class BulbOn extends Component{
    render(){
    let bulbOn='https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAwMi83NTkvb3JpZ2luYWwvMDgxMjA5LWxpZ2h0LWJ1bGItMDIuanBn'

        return(
            <div>
                <img src={bulbOn} alt="" width={this.props.width} height={this.props.height}/>
            </div>
        );
    }
}
export default BulbOn;
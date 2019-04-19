import React, {Component} from 'react'

class BulbOff extends Component{
    render(){
    let bulbOff='https://www.industrytap.com/wp-content/uploads/2016/02/incandescent-e1456179151174.jpg'

        return(
            <div>
                <img src={bulbOff} alt="" width={this.props.width} height={this.props.height}/>
            </div>
        );
    }
}
export default BulbOff;
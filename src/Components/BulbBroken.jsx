import React, {Component} from 'react'

class BulbBroken extends Component{
    render(){
    let bulbBroken='https://media.istockphoto.com/vectors/brokendown-light-bulb-vector-id164446736'

        return(
            <div>
              <img src={bulbBroken} alt="" width={this.props.width} height={this.props.height}/>  
            </div>
        );
    }
}
export default BulbBroken;
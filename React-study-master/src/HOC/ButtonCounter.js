import React from "react";
import updatedComponent from './WithCounter'
class myHoc extends React.Component {
    render() {
        const {count,incrementCount} = this.props
        return (
            <div>
                <button onClick={incrementCount}>Button Click {count} times</button>
            </div>
        )
    }
}
export default updatedComponent(myHoc,10)
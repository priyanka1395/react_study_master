import React from "react";
import updatedComponent from './WithCounter'
class myHoc extends React.Component {
    render() {
        const {count,incrementCount} = this.props
        return (
            <div>
                <h1 onMouseOver={incrementCount}>Hoverd {count} times</h1>
            </div>
        )
    }
}
export default updatedComponent(myHoc,5)

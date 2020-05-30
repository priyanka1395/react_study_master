import React from 'react'

class fruit extends React.Component{
    constructor(){
        super();
        this.state = {
            fruitShop: [
                {
                    fruit_name:'Banana',cost:45,color:'Yellow'
                },
                {
                    fruit_name:'Apple',cost:120,color:'Red'
                },
                {
                    fruit_name:'Orange',cost:60,color:'Orange'
                },
                {
                    fruit_name:'Guava',cost:47,color:'Green'
                },
            ]   
        }
    }
    render(){
        return(
            <div>
                <table className="table table-striped">
                
                    <th>Fruit Name</th>
                    <th>Fruit Cost</th>
                    <th>Fruit Color</th>
        
                    <tbody>
                    {
                        this.state.fruitShop.map((f,id)=>{
                            return(
                                <tr key={id}>
                                    <td>{f.fruit_name}</td>
                                    <td>{f.cost}</td>
                            <td>{f.color}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default fruit
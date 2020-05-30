import React from 'react';

class emp extends React.Component {
    constructor() {
        super();
        this.state = {
            Birds: [
                { name: "WoodPicker", color:'green',src:'https://media.nature.com/lw800/magazine-assets/d41586-018-06688-4/d41586-018-06688-4_16124110.jpg' },
                { name: "Hornbil", color:'yellow',src:'https://static01.nyt.com/images/2020/04/03/science/03TB-KINGFISHER1/03TB-KINGFISHER1-mediumSquareAt3X.jpg'},
                { name: "Cuckoo", color:'Black',src:'https://i.ytimg.com/vi/YTR21os8gTA/maxresdefault.jpg' },
                { name: "Myna", color:'orange',src:'https://i.ytimg.com/vi/MdNyeasi0GI/maxresdefault.jpg' }
            ]
        }
    }
    render() {
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <th>Name</th>
                        <th>Color</th>
                        <th>Image</th>
                        {
                            this.state.Birds.map((bird,id) => {
                                return (
                                    <tr key={id}>
                                        <td>{bird.name}</td>
                                        <td>{bird.color}</td>
                                        <td>
                                            <img src = {bird.src} alt="hello" height='200' width='200'/>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </thead>
                </table>
            </div>
        )
    }
}
export default emp
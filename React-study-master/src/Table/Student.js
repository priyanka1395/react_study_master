import React, { Component } from 'react';

class Student extends Component {
    constructor() {
        super();
        this.state = {
            students: [
                { name: 'Girish', age: 30, src: 'https://www.sciencealert.com/images/2019-01/processed/BirdoVisionUVcamera_1024.jpg' },
                { name: 'Ramesh', age: 18, src: 'https://www.sciencealert.com/images/2019-01/processed/BirdoVisionUVcamera_1024.jpg' },
                { name: 'Anirudh', age: 20, src: 'https://www.sciencealert.com/images/2019-01/processed/BirdoVisionUVcamera_1024.jpg' }
            ]
        }
    }
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Image</th>
                        {
                            this.state.students.map((student,id) => {
                                return (
                                    <tr key={id}>
                                        <td>{student.name}</td>
                                        <td>{student.age}</td>
                                        <td>
                                            <img src={student.src} height="200" width="200"/>
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
export default Student
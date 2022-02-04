import React, { Component } from 'react';
import { BiMap } from 'react-icons/bi';
import { AiOutlinePhone, AiOutlineCalendar } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';


export default class Negocio extends Component {
    render() {
        return (
            <div>
                {
                    this.props.local.map(e =>
                        <div className="card mb-3 carta-alt" key={uuidv4()}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img className="img-fluid rounded-start2" src={e.img} alt="..." />
                                </div>
                                <div className="col-md-8 cuerpo-negocio">
                                    <div className="card-body ">
                                        <h2>{e.name}</h2>
                                        <h6><BiMap />{e.address}</h6>
                                        <h6><AiOutlinePhone />{e.phone}</h6>
                                        <h6><AiOutlineCalendar />24hs</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}
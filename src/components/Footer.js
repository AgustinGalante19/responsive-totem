import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        <div className="col text-white text-center">
                            <h4>Responsive Totem</h4>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm">
                            <h6><span>&copy;</span>{new Date().getFullYear()} Galante Agustin</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
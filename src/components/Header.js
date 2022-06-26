// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';

const Header = () => {
    return (
        <>
            <div style={{ width: "100%" }}>
                <div>
                    <h1> Call a Friend </h1>
                </div>
                <div>
                    <h6> your friendly contact app </h6>
                </div>
                <div style={{ marginBottom: 30 }}> &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; </div>
            </div>
        </>
    )
}

export default Header;
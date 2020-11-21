import React from 'react'

export default function DataBinding() {
    const title = 'Cybersoft';
    const img = 'https://picsum.photos/200/200';
    const sv = {
        maSV: '0001',
        tenSinhVien: 'Nguyen Van A',
        hinhAnh: 'https://picsum.photos/200/200'
    }

    const a = () => {
        return <div>
            <h3>Hinh Anh</h3>
            <img src={sv.hinhAnh} />
        </div>
    }

    return (
        <div>
            <p className="display-4"> {title} </p>
            <img src={img} />
            <input className="form-control w-25" value={title} />

            <div className="card text-left" style={{ background: '#ddd', padding: '10px'}}>
                {/* <img className="card-img-top" src={sv.hinhAnh} /> */}
                <div className="card-body">
                    <h4 className="card-title">{sv.tenSinhVien}</h4>
                    <p className="card-text">{sv.maSV}</p>
                </div>
            </div>
            {a()}
        </div>
    )
}

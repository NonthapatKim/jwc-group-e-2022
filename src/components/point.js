import React, { useState } from 'react'
import QR from '../images/qr.jpg'

export default function Point() {

  const [numt] = useState(Math.floor(100000 + Math.random() * 900000));

  return (
    <div className='container my-5'>
        <h1 className='display-2 mb-5'>คูปอง<span style={{color: '#5fd068'}}>ส่วนลด</span></h1>
        <div className='row'>
            <div className='col-sm-12 col-md-6 col-lg-6'>
                <div className='card mt-3 mb-3' style={{backgroundColor: '#f6fbf4'}}>
                    <div className='card-body'>
                        <h4 className='card-title'>ส่วนลด 100 บาท แลกซื้อน้ำดื่มขนาด 1500 มล. แพ็ค 6 ขวด</h4>
                        <p className='card-text'>ส่วนลดถึงวันที่ 25 กรกฏาคม 2565</p>
                        <button type="button" className='btn-yw' data-bs-toggle="modal" data-bs-target="#btn-point">แลกรับ</button>
                    </div>
                </div>
            </div>

            <div className='col-sm-12 col-md-6 col-lg-6'>
                <div className='card mt-3 mb-3' style={{backgroundColor: '#f6fbf4'}}>
                    <div className='card-body'>
                        <h4 className='card-title'>ส่วนลด 500 บาท เมื่อซื้อของที่ห้าง JWC</h4>
                        <p className='card-text'>ส่วนลดถึงวันที่ 31 กรกฏาคม 2565</p>
                        <button type="button" className='btn-yw' data-bs-toggle="modal" data-bs-target="#btn-point">แลกรับ</button>
                    </div>
                </div>
            </div>

            <div className='col-sm-12 col-md-6 col-lg-6'>
                <div className='card mt-3 mb-3' style={{backgroundColor: '#f6fbf4'}}>
                    <div className='card-body'>
                        <h4 className='card-title'>ส่วนลด 60 บาท เมื่อซื้อชานมไข่มุก ร้าน KoMi INK</h4>
                        <p className='card-text'>ส่วนลดถึงวันที่ 31 กรกฏาคม 2565</p>
                        <button type="button" className='btn-yw' data-bs-toggle="modal" data-bs-target="#btn-point">แลกรับ</button>
                    </div>
                </div>
            </div>

            <div className='col-sm-12 col-md-6 col-lg-6'>
                <div className='card mt-3 mb-3' style={{backgroundColor: '#f6fbf4'}}>
                    <div className='card-body'>
                        <h4 className='card-title'>ส่วนลด 40 บาท เมื่อซื้อขนมมันฝรั่งทอด เลย ราคา 65 บาท</h4>
                        <p className='card-text'>ส่วนลดถึงวันที่ 31 กรกฏาคม 2565</p>
                        <button type="button" className='btn-yw' data-bs-toggle="modal" data-bs-target="#btn-point">แลกรับ</button>
                    </div>
                </div>
            </div>

            <div className='col-sm-12 col-md-6 col-lg-6'>
                <div className='card mt-3 mb-3' style={{backgroundColor: '#f6fbf4'}}>
                    <div className='card-body'>
                        <h4 className='card-title'>แลกซื้อสินค้าในราคา 50 บาท จากร้านเสื้อผ้าไนท์</h4>
                        <p className='card-text'>ส่วนลดถึงวันที่ 31 กรกฏาคม 2565</p>
                        <button type="button" className='btn-yw' data-bs-toggle="modal" data-bs-target="#btn-point">แลกรับ</button>
                    </div>
                </div>
            </div>

            <div className='col-sm-12 col-md-6 col-lg-6'>
                <div className='card mt-3 mb-3' style={{backgroundColor: '#f6fbf4'}}>
                    <div className='card-body'>
                        <h4 className='card-title'>แลกซื้อ (เพลง) "เสื้อตัวเล็ก" จากเบล วริศรา</h4>
                        <p className='card-text'>ส่วนลดถึงวันที่ 31 กรกฏาคม 2565</p>
                        <button type="button" className='btn-yw' data-bs-toggle="modal" data-bs-target="#btn-point">แลกรับ</button>
                    </div>
                </div>
            </div>
        </div>

       
        <div className="modal fade" id="btn-point" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">แลกรับสินค้าหรือบริการ</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <img src={QR} className='img-fluid mb-3' alt=''></img>
                    <p className='fs-4 text-center'>หรือรับรหัสส่วนลด</p>
                    <input type='text' className='form-control text-center fs-1 font-monospace' value={numt} disabled/>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">ปิด</button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

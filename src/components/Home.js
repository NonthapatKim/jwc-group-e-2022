import React from 'react'

import Tree from '../images/tree.png'

export default function Home() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-lg-6 my-5'>
              <div className='detail-t my-5'>
                <h2 className='fw-bold display-1 mt-5' style={{color: '#5fd068'}}>แยก แลก แต้ม</h2>
                <p className='fs-2 mt-5 mb-5'>เป็นแพลตฟอร์มที่จะทำให้คุณสร้างประโยชน์จากขยะได้มากขึ้น <br></br> และได้ผลตอบแทนจากขยะ <br></br> <span style={{color: '#5fd068'}}>ขยะจะไม่ใช่สิ่งไร้ค่าอีกต่อไป</span></p>
              </div>
            </div>

            <div className='col-lg-6 my-5'>
              <div className='detail-t my-5'>
                <img src={Tree} className="img-fluid" width={600} height={600} alt=''></img>
              </div>
            </div>
        </div>
    </div>
  )
}

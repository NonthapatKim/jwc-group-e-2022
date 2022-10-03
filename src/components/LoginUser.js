import { useState } from 'react'
import { useNavigate } from "react-router-dom"

function Login() {

  let navigate = useNavigate();

  const [state,setState] = useState({
    username: "",
    password: ""
  })

  const {username, password} = state

  const inputValue = name => event => {
    setState({...state,[name]:event.target.value});
  }

  const SubmitData = (e) => {
    e.preventDefault();
    navigate("/userhome");
  }

  return (
    
    <div className='container my-5 Logint'>
      <h1>เข้าสู่ระบบสำหรับบุคคลทั่วไป</h1>
      <div className='row'>
        <form onSubmit={SubmitData}>
          <div className='mb-3'>
            <label>ชื่อผู้ใช้งาน</label>
            <input 
              type="text" 
              className="form-control"
              placeholder='Username'
              onChange={inputValue('username')}
              value={username}
            />
          </div>

          <div className='mb-3'>
            <label>รหัสผ่าน</label>
            <input 
              type="password" 
              className="form-control"
              placeholder='Password'
              onChange={inputValue('password')}
              value={password}
            />
          </div>

          <div className='btn-group col-4'>
            <button type='submit' className='btn btn-primary'>เข้าสู่ระบบ</button>
            <button type='reset' className='btn btn-danger'>ล้างข้อมูล</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
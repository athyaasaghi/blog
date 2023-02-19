import axios from 'axios';
// import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState} from 'react';

function registrasi(){
  const [registrasiTambah, setregistrasiTambah] = useState({
    name:'',
    email:'',
    gender:''
});


const router = useRouter()

const addTambah = (e)=>{
    setregistrasiTambah((preValue) => ({...preValue, [e.target.name] : e.target.value}))
}

const handlerSubmit = async (event)=> {
  event.preventDefault();
  console.log(registrasiTambah)

  const res = await axios.post('https://gorest.co.in/public/v2/users', {
      name: registrasiTambah.username,
      email:registrasiTambah.password,
      gender:registrasiTambah.email
  }).then((payload)=>{
      console.log(payload)
      router.push('/blog/dashboard')
  }).catch((payload)=>{
      console.log(payload)
      alert('harus diisi')
  })
  console.log(res);
  router.back();

// console.log(res.data.data);
// setPostTambah(res.data.data);

}
    return(
        <div class="center">
        <h1>Registrasi</h1>
        <form method="post" onSubmit={handlerSubmit}>

          <div class="txt_field">
            <input type="text" required
            name="name" onChange={addTambah}/>
            <span></span>
            <label>Name</label>
          </div>

          <div class="txt_field">
            <input type="email" required
            name="email" onChange={addTambah}></input>
            <span></span>
            <label>email</label>
          </div>

          <div class="txt_field">
            <input type="text" required
            name="gender" onChange={addTambah}/>
            <span></span>
            <label>gender</label>
          </div>

          <input type="submit" value="registrasi"></input>

          
          <div class="signup_link">
            Not a member? 
            <p>sig in</p>
          </div>

        </form>
      </div>
    )
}

export default registrasi;
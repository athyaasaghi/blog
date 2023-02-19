import Link from "next/link";

function loginBlog(){
    return(
        <div class="center">
        <h1>Login</h1>
        <form method="post">
          <div class="txt_field">
            <input type="text" required
            name="username"/>
            <span></span>
            <label>Username</label>
          </div>
          <div class="txt_field">
            <input type="password" required
            name="password"></input>
            <span></span>
            <label>Password</label>
          </div>

          <input type="submit" value="Login"></input>

          
          <div class="signup_link">
            tidak punya akun? 
            <Link href={'/blog/registrasi'}>
            <p>registrasi</p></Link>
          </div>

        </form>
      </div>
    )
}

export default loginBlog;
import React, { useEffect, useState } from 'react';
import CardBlog from './CardBlog';
import { useRouter } from 'next/router';

function homeBlog(){
    const [artikel, setArtikel] = useState([]);
    
    useEffect(()=>{
        fetch("https://gorest.co.in/public/v2/posts").then(
            response => response.json().then(data => {
                setArtikel(data);
            })
        )
    },[])

    const router = useRouter();

        return (
            <>
            <div class='container_semua'>
              <div class="hero">
            <div class="tulisan">
                <h1> Fitur Your Apps</h1>
                <h3> Fitur Your Device Mobile App </h3>
            </div>
            
            <button className="btn btn-secondary me-2 loginHome" onClick={()=> { router.push('/blog/login')}}>Login</button>

            </div>

            <div class="about">
                <h1>Up Your Story</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi deleniti corrupti, repellendus asperiores atque quod beatae molestias dignissimos a, facere illo. Optio, quas earum quisquam molestias saepe deserunt esse aspernatur at ullam quasi temporibus non iste consequatur odio nostrum, vitae laborum! Aspernatur error distinctio quas animi tempore alias impedit ad.</p>
            </div>

            <CardBlog data={artikel}/>

            <div class="footer">
                <h1>Athya asaghi</h1>
                <p>Terimakasih telah berkunjung || 2022</p>
            </div>
            </div>
            </>
        )
}

export default homeBlog;
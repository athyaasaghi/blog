import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import { useRouter } from 'next/router';

function detailBlog(){
    const[postDetail, setPostDetail] = useState([]);

    const route = useRouter()
    // console.log(route);
  
      const getDetail =(id_route)=>{
          const res = axios.get(`https://gorest.co.in/public/v2/posts?id=${id_route}`).then(function(dataArtikel){
            setPostDetail(dataArtikel.data[0])
            console.log(dataArtikel.data[0].title)
          }).catch(function(error){
            console.log(error);
          })
        //   console.log(res
        //     .artikelisi)
        //   setPostDetail(res.artikelisi)
      }
  
      useEffect(()=>{
          if(route.query.id){
              getDetail(route.query.id);
          }
        //   console.log(route.query.id);
      }, [route])

    //   setPostDetail(postDetail.dataArtikel)

  
    return(
        <>
        <div className="container_detail">
        <div className="back">
            <a>kembali ke awal</a>
        </div>

        <section>
            <h1>
                    {
                        postDetail?.title
                        
                    }
            </h1>
            <p>
                {
                    postDetail?.body
                }
            </p>
        </section>

        <div className="container_pesan">
            <div className='pembungkus'>
                <h3>Komentar Anda</h3>

                <p>Email Anda</p>
                <input/>

                <p>Pesan</p>
                <textarea></textarea>
                <br/>

                <input type="submit" value="kirim" class="kirim"/>
            </div>

        </div>
        </div>


        </>
    )
}

export default detailBlog;
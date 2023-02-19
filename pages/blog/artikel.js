import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect} from 'react';
import axios from 'axios';


function artikel(){
    const [postArtikel, setPost] = useState([]);

    const getPostsArtikel = async () => {
            const res = await axios.get("https://gorest.co.in/public/v2/posts");
		// console.log(res.data);
		setPost(res.data)
        console.log(res.data)
	}

    useEffect(()=>{
       
        getPostsArtikel();
    }, []);

    const hapusProduk = async (id) => {
		const res = await axios.delete(`http://localhost:3001/produk/${id}`);
		getPosts();
		
	}


	const router = useRouter()


    return(
      <>
      <div className='bungkus-artikel'>
      <section className="sidebar">

<div className="ul">
<ul className="side">
    <li class="active">
    <Link href={'/blog/dashboard'}>
            <i class='bx bxs-doughnut-chart' ></i>
            <span class="text">Dashboard</span>
        </Link>
    </li>
    <li>
        <Link href={'/blog/artikel'}>
            <i class='bx bxs-doughnut-chart' ></i>
            <span class="text">Artikel</span>
        </Link>
    </li>
</ul>
<ul className="side">
    <li>
        <Link href={'/blog/homeBlog'}>
            <i class='bx bxs-log-out-circle' ></i>
            <span class="text">Logout</span>
        </Link>
    </li>
</ul>
</div>

</section>


    <div class="table-data">
        <div class="order">

        <table className="tabel_produk">
        <thead>
            <tr className="tr_produk">
            <th>id</th>
            <th>judul</th>
            <th>isi</th>
            <th>Aksi</th>
            </tr>
        </thead>
        <tbody className="td_produk">
        {postArtikel.map((dataArtikel) =>(
                <tr>
                    <td>{dataArtikel.id}</td>
                    <td>{dataArtikel.title}</td>
                    <td>{dataArtikel.body}</td>
                    <td>
								<button className="btn btn-secondary me-2" onClick={()=> { router.push(`/blog/update/${data.id}`)}}>Edit</button>
							{/* </Link> */}

								<button onClick={()=>hapusProduk(data.id)} className="btn btn-danger">Hapus</button>

                    </td>						
                    </tr>
        ))}
                     
                
        </tbody>
        </table>

        </div>
        
    </div>
    </div>
</>
    )
}

export default artikel;
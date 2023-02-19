import Link from "next/link";

function dashboard(){
    return(

	   <div className="bungkus-dashboard">
      
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

		<div className="selamat-datang">

		</div>
        
	</section>
	</div>

    )
}

export default dashboard;
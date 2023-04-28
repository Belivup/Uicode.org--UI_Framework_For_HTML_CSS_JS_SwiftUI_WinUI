import Link from "next/link";

export default function MainNav(){

	const navLinks = [
		{name: 'Button', path:'../Button'}
	]

	return (
		<>
			<div style={{backgroundColor:'#0b122d'}}>
				<Link href={'/'}><h1 style={{padding:'20px 20px', textAlign:'center', margin:0, color:'white', fontFamily:'sans-serif'}}>UiCode</h1></Link>
			</div>

			<ul>
				<li>
					<Link href={'../Button'}>Button Page</Link>
				</li>
			</ul>

		</>
	)
}
"use client"

import Button from "@/Library/Button";
import {useState} from "react";

export default function ButtonPage(){

	const [title, setTitle] = useState("")
	const [className, setClassName] = useState("")

	const [style, setStyle] = useState({
		backgroundColor: '',
		color: '',
		padding: '',
		borderRadius: '',
		border: '',
		fontFamily: '',
		fontWeight: ''
	})


	function handleInput(e){

		setStyle({
			...style,
			[e.target.name]: e.target.value
		})
	}

	return(
		<>
			<h1>Customize Button GUI</h1>

			<div>
				<input type="text" name={'title'} placeholder={"Title"} value={title} onChange={ (e) => setTitle(e.target.value)} />
				<input type="text" name={'className'} placeholder={"className"} value={className} onChange={ (e) => setClassName(e.target.value)} />

				<br/> <br/>

				{/*Loop Through Style Object*/}
				{Object.keys(style).map(key => {
					return(
						<input key={key} type="text" name={key} placeholder={key} value={style.key} onChange={handleInput} />
					)
				})}


			</div>

			<br/> <br/> <br/>

			<Button className={className} style={style} >{title || "Hello World"}</Button>
		</>
	)
}


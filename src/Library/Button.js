"use client"

import {useState} from "react";

export default function Button({ children, style, className }){


	// This Filtered Style Only for Web, You need to Define Separate For WinUI & SwiftUI
	const filteredStyle = Object.fromEntries(
		Object.entries(style).filter(([_, value]) => value !== '')
	)

	// For WinUI
	// const winUiStyle = {
	// 	'key' : 'style.value'
	// }


	// Clipboard
	const styles = JSON.stringify(filteredStyle).replace(/"([^"]+)":/g, '$1:')

	const CopyButtonCode = `<button className="${className}"
${Object.keys(filteredStyle).length === 0? '' : ` style={${styles}}` } > ${children} </button>`


	// Show Code as UI
	function ShowButtonCode(){
		return(
			<>
				{/* ------- Copy The Code --------*/}
				<div onClick={() => navigator.clipboard.writeText(CopyButtonCode) } style={styleInline.clipboard}>

                    <pre style={{whiteSpace:'pre-wrap'}}>

                        <code style={{fontWeight:'bold'}}>
                            {CopyButtonCode}
                        </code>

						{/* ------- Copy The Code --------*/}
						<button style={{right:20, position:"absolute"}} onClick={() =>  navigator.clipboard.writeText(CopyButtonCode)} >Copy</button>
                    </pre>
				</div>
			</>
		)
	}


	return(

		<>

			<button className={className} style={filteredStyle}>{children}</button>

			{ShowButtonCode()}
		</>
	)


}

const styleInline = {
	clipboard:{
		backgroundColor:'#d5d5d5',
		padding:'20px 20px',
		margin:'20px 0',
		borderRadius:10,
		overflowX: 'auto',
		cursor:'pointer',
		position:'relative'
	}
}


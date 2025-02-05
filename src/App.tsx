import { useState } from 'react'

function App(): any {
	// enum Size { One = "s", Two = 's', Three = 's', Four = 's' };
	// let mySize: Size = Size.Four;
	// console.log(mySize);
	const pres = (name?: string, birthdate?: number): string => {
		let CurrentYear = new Date().getFullYear();
		let age = birthdate ? CurrentYear - birthdate : 0;
		if (age)
			return `you are ${name} ,and your age is ${age}`;
		return `you are ${name} , and your age is not montioned`;
	}
	let response: string = pres("rachid");
	console.log(response);
}

export default App

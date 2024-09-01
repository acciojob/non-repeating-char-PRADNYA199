function firstNonRepeatedChar(str) {
 // Write your code herele
	const charCount={};
	for ( let char of str){
		if(charCount[char])
		{
			charCount++;
		}
		else{
			charCount=1;
		}
	}
	for(let char of str)
		{
			if(charCount[char]===1)
			{
				return char;
			}
		}
	return null;
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

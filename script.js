function stringChop(str, size) {
	let arr=[];
	let len=str.length;
	let count=0;
	if(len<size){
		for(let j=0;j<len;j++){
		subs+=str[count++];
	}
	arr.push(subs);
	return arr;
	}
	for(let i=0;i<str.length;i+=size){
		let subs="";
		for(let j=0;j<size;j++){
			subs+=str[count++];
		}
		len-=size;
		arr.push(subs);
	}
	let subs="";
	for(let j=0;j<len;j++){
		subs+=str[count++];
	}
	arr.push(subs);
	return arr;
} 

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size)); 
  

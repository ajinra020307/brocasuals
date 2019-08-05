function displaycontact(){
	document.querySelector('.content').style.display="none";
	document.querySelector('.contact').style.display="flex"
}
function removecontact(){
	document.querySelector('.content').style.display="block";
	document.querySelector('.contact').style.display="none"
}
function displaybuy(){
	document.querySelector('.content').style.display="none";
	
	document.querySelector('.buy').style.display="flex"
}
function closebuy(){
	document.querySelector('.content').style.display="block";
	
	document.querySelector('.buy').style.display="none"
}
function generateid(){
	let images=document.querySelectorAll('.id')
	images.forEach((v,i)=>{
		v.innerText+=i+1
	})
}
generateid()
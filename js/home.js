const buttons=document.querySelectorAll('button')
buttons.forEach((v)=>{
	v.addEventListener('click', function(e) {
	   v.style.backgroundColor="green"
	});
})

function displaycontact(){
	try{
		document.querySelector('.showcase').style.display="none"
	document.querySelector('.top_collections').style.display="none"
	document.querySelector('.contact').style.display="flex"
}catch(e){

}
	
}

function removecontact(){
	try{
		document.querySelector('.showcase').style.display="flex"
	document.querySelector('.top_collections').style.display="block"
	document.querySelector('.contact').style.display="none"
	}catch(e){
		
	}
	
}
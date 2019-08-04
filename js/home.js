const buttons=document.querySelectorAll('button')
buttons.forEach((v)=>{
	v.classList.add("animated","pulse","slow","infinite")
})

function displaycontact(){
	document.querySelector('.showcase').style.display="none"
	document.querySelector('.top_collections').style.display="none"
	document.querySelector('.contact').style.display="flex"
}

function removecontact(){
	document.querySelector('.showcase').style.display="flex"
	document.querySelector('.top_collections').style.display="block"
	document.querySelector('.contact').style.display="none"
}
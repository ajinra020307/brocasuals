const buttons=document.querySelectorAll('button')
buttons.forEach((v)=>{
	v.addEventListener('click', function(e) {
	   v.style.backgroundColor="green"
	});
})

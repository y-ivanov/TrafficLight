$('#start').click(butt);


function butt() {
	console.log('click')
};

$('#start').click(function(){
	console.log(this.id);
});
// console.log('fuck')
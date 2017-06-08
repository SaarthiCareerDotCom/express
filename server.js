var app = require('./app.js');

app.listen(app.get('PORT'),function(req,res){
	console.log("listening to port "+ app.get('PORT'));
});

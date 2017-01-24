Router.configure({
	// The default layout
	layoutTemplate: 'mainNav'
});

Router.route('/start',function(){
	this.render('start');
});
Router.route('/choice',function(){
	this.render('choice');
});
Router.route('/custom',function(){
	this.render('custom');
});
Router.route('/special',function(){
	this.render('special');
});
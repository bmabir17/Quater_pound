import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

if(Meteor.isClient){
	Template.custom.events({
		'submit form': function(event){
			event.preventDefault();
			var radioValue=event.target.BunSelect.value;
			console.log(radioValue);
		}
	});
	Template.start.onRendered(function(){
		$('body').addClass('body-start')
	})
}
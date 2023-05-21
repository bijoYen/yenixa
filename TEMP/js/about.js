/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Input
5. Init Milestones
6. timer


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = $('.header');
	var headerSocial = $('.header_social');
	var menu = $('.menu');
	var menuActive = false;
	var burger = $('.hamburger');
	var ctrl = new ScrollMagic.Controller();

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();

		setTimeout(function()
		{
			$(window).trigger('resize.px.parallax');
		}, 375);
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initMenu();
	initInput();
	initMilestones();

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if($(window).scrollTop() > 127)
		{
			header.addClass('scrolled');
			headerSocial.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
			headerSocial.removeClass('scrolled');
		}
	}

	/* 

	3. Set Menu

	*/

	function initMenu() {
		if ($('.menu').length) {
		  var menu = $('.menu');
		  var menuItems = menu.find('.menu_content a');
	  
		  if ($('.hamburger').length) {
			burger.on('click', function() {
			  if (menuActive) {
				closeMenu();
			  } else {
				openMenu();
			  }
			});
		  }
		  
		  menuItems.on('click', function() {
			if (menuActive) {
			  closeMenu();
			}
		  });
		}
	  
		if ($('.menu_close').length) {
		  var close = $('.menu_close');
		  close.on('click', function() {
			if (menuActive) {
			  closeMenu();
			}
		  });
		}
	  }
	  
	  function openMenu() {
		menu.addClass('active');
		menuActive = true;
	  }
	  
	  function closeMenu() {
		menu.removeClass('active');
		menuActive = false;
	  }
	  
	/* 

	4. Init Input

	*/

	function initInput()
	{
		if($('.newsletter_input').length)
		{
			var inpt = $('.newsletter_input');
			inpt.each(function()
			{
				var ele = $(this);
				var border = ele.next();

				ele.focus(function()
				{
					border.css({'visibility': "visible", 'opacity': "1"});
				});
				ele.blur(function()
				{
					border.css({'visibility': "hidden", 'opacity': "0"});
				});

				ele.on("mouseenter", function()
				{
					border.css({'visibility': "visible", 'opacity': "1"});
				});

				ele.on("mouseleave", function()
				{
					if(!ele.is(":focus"))
					{
						border.css({'visibility': "hidden", 'opacity': "0"});
					}
				});
				
			});
		}
	}

	/* 

	5. Initialize Milestones

	*/

	function initMilestones()
	{
		if($('.milestone_counter').length)
		{
			var milestoneItems = $('.milestone_counter');

	    	milestoneItems.each(function(i)
	    	{
	    		var ele = $(this);
	    		var endValue = ele.data('end-value');
	    		var eleValue = ele.text();

	    		/* Use data-sign-before and data-sign-after to add signs
	    		infront or behind the counter number (+, k, etc) */
	    		var signBefore = "";
	    		var signAfter = "";

	    		if(ele.attr('data-sign-before'))
	    		{
	    			signBefore = ele.attr('data-sign-before');
	    		}

	    		if(ele.attr('data-sign-after'))
	    		{
	    			signAfter = ele.attr('data-sign-after');
	    		}

	    		var milestoneScene = new ScrollMagic.Scene({
		    		triggerElement: this,
		    		triggerHook: 'onEnter',
		    		reverse:false
		    	})
		    	.on('start', function()
		    	{
		    		var counter = {value:eleValue};
		    		var counterTween = TweenMax.to(counter, 4,
		    		{
		    			value: endValue,
		    			roundProps:"value", 
						ease: Circ.easeOut, 
						onUpdate:function()
						{
							document.getElementsByClassName('milestone_counter')[i].innerHTML = signBefore + counter.value + signAfter;
						}
		    		});
		    	})
			    .addTo(ctrl);
	    	});
		}
	}
});


//timer

(function() {
	const second = 1000,
	  minute = second * 60,
	  hour = minute * 60,
	  day = hour * 24;
  
	const deadline = new Date("2023-05-24T00:00:00.000Z").getTime(),
	  x = setInterval(function() {
		const now = new Date().getTime(),
		  distance = deadline - now;
  
		document.getElementById("days").innerText = Math.floor(distance / (day)),
		  document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
		  document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
		  document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
		// do something later when date is reached
		if (distance < 0) {
		  clearInterval(x);
		  document.getElementById("headline").innerText = "Time is up!";
		  document.getElementById("countdown").style.display = "none";
		  document.getElementById("content").style.display = "block";
		}
		// seconds
	  }, 1000)
  }());
  

  var vid = document.getElementById("myVideo");
function enableAutoplay() { 
  vid.autoplay = true;
  vid.load();
}
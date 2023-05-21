/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Input


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
	
});

// event hiding


        // JavaScript code to toggle sections
        const seeMoreButtons = document.querySelectorAll('.see-more');

        seeMoreButtons.forEach(button => {
            const sectionId = button.getAttribute('href');
            const sectionContent = document.querySelector(`${sectionId} + .more-content`);

            button.addEventListener('click', () => {
                sectionContent.classList.toggle('hidden');
                button.innerHTML = sectionContent.classList.contains('hidden') ? 'see more' : 'see less';
            });
        });


        //event hiding
        // get all toggle and content elements
        var toggles = document.querySelectorAll('.accordion-toggle');
        var contents = document.querySelectorAll('.accordion-content');

        // add a click event listener to each toggle element
        for (var i = 0; i < toggles.length; i++) {
            toggles[i].addEventListener('click', function() {
                var content = this.nextElementSibling;
                var isActive = this.classList.contains('active');

                // close any open content before toggling new content
                for (var j = 0; j < contents.length; j++) {
                    if (contents[j].classList.contains('active') && contents[j] !== content) {
                        contents[j].classList.remove('active');
                        toggles[j].classList.remove('active');
                    }
                }

                // toggle the active class on the clicked toggle and corresponding content
                this.classList.toggle('active');
                content.classList.toggle('active');
            });
        }
    
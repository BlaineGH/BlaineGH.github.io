!function(e){var a=e(window),l=e("body");breakpoints({xlarge:["1281px","1680px"],large:["981px","1280px"],medium:["737px","980px"],small:["481px","736px"],xsmall:["361px","480px"],xxsmall:[null,"360px"]}),a.on("load",(function(){window.setTimeout((function(){l.removeClass("is-preload")}),100)})),browser.mobile&&l.addClass("is-touch"),e("#nav > ul").dropotron({mode:"fade",noOpenerFade:!0,alignment:"center",detach:!1}),e('<div id="titleBar"><a href="#navPanel" class="toggle" aria-label="Open navigation menu"></a><span class="title">'+e("#logo h1").html()+"</span></div>").appendTo(l),e('<div id="navPanel"><nav>'+e("#nav").navList()+"</nav></div>").appendTo(l).panel({delay:500,hideOnClick:!0,hideOnSwipe:!0,resetScroll:!0,resetForms:!0,side:"left",target:l,visibleClass:"navPanel-visible"})}(jQuery);
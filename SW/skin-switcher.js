jQuery(document).ready(function() {

    /*! Lazy Load 1.9.4 - MIT license - Copyright 2010-2013 Mika Tuupola */
    !function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);


    jQuery("img.lazy").show().lazyload();


    jQuery(".panel_button").click(function(){
        jQuery("div#panel").animate({
            left: "0px"
        }, "fast");
        jQuery(".panel_button").animate({
            left: "300px"
        }, "fast");
        jQuery(".panel_button").toggle();
    }); 
    jQuery(".hide_button").click(function(){
        jQuery("#panel").animate({
            left: "-300px"
        }, "fast");
        jQuery(".panel_button").animate({
            left: "0px"
        }, "fast");
    });

    jQuery(window).load(function() {
        jQuery(".loader").fadeOut("slow");
    })

    jQuery('.modeltheme_skin_switcher .defaultblue').click(function() {
        var head = jQuery('head');
        head.append('<link rel="stylesheet" id="cssdefaultblue" href="http://localhost/trend/css/skin-colors/skin-default.css" type="text/css" media="all" />');
        head.remove('#cssgreen');
        head.remove('#cssturquoise');
        head.remove('#cssgrey');
        head.remove('#cssorange');
        head.remove('#cssred');
        head.remove('#cssyellow');
        head.remove('#csspurple');
        jQuery(".flat-icon").flatshadow({
            fade: false,
            color: "#00ADEF",
            boxShadow: "#00ADEF"
        });
    });
    jQuery('.modeltheme_skin_switcher .green').click(function() {
        var head = jQuery('head');
        head.append('<link rel="stylesheet" id="cssdefaultblue" href="http://localhost/trend/css/skin-colors/skin-green.css" type="text/css" media="all" />');
        head.remove('#cssdefaultblue');
        head.remove('#cssturquoise');
        head.remove('#cssgrey');
        head.remove('#cssorange');
        head.remove('#cssred');
        head.remove('#cssyellow');
        head.remove('#csspurple');
        jQuery(".flat-icon").flatshadow({
            fade: false,
            color: "#2DCC70",
            boxShadow: "#2DCC70"
        });
    });
    jQuery('.modeltheme_skin_switcher .turquoise').click(function() {
        var head = jQuery('head');
        head.append('<link rel="stylesheet" id="cssdefaultblue" href="http://localhost/trend/css/skin-colors/skin-turquoise.css" type="text/css" media="all" />');
        head.remove('#cssdefaultblue');
        head.remove('#cssgreen');
        head.remove('#cssgrey');
        head.remove('#cssorange');
        head.remove('#cssred');
        head.remove('#cssyellow');
        head.remove('#csspurple');
        jQuery(".flat-icon").flatshadow({
            fade: false,
            color: "#1BBC9B",
            boxShadow: "#1BBC9B"
        });
    });
    jQuery('.modeltheme_skin_switcher .grey').click(function() {
        var head = jQuery('head');
        head.append('<link rel="stylesheet" id="cssdefaultblue" href="http://localhost/trend/css/skin-colors/skin-grey.css" type="text/css" media="all" />');
        head.remove('#cssdefaultblue');
        head.remove('#cssgreen');
        head.remove('#cssturquoise');
        head.remove('#cssorange');
        head.remove('#cssred');
        head.remove('#cssyellow');
        head.remove('#csspurple');
        jQuery(".flat-icon").flatshadow({
            fade: false,
            color: "#95A5A5",
            boxShadow: "#95A5A5"
        });
    });
    jQuery('.modeltheme_skin_switcher .orange').click(function() {
        var head = jQuery('head');
        head.append('<link rel="stylesheet" id="cssdefaultblue" href="http://localhost/trend/css/skin-colors/skin-orange.css" type="text/css" media="all" />');
        head.remove('#cssdefaultblue');
        head.remove('#cssgreen');
        head.remove('#cssturquoise');
        head.remove('#cssgrey');
        head.remove('#cssred');
        head.remove('#cssyellow');
        head.remove('#csspurple');
        jQuery(".flat-icon").flatshadow({
            fade: false,
            color: "#E77E23",
            boxShadow: "#E77E23"
        });
    });
    jQuery('.modeltheme_skin_switcher .red').click(function() {
        var head = jQuery('head');
        head.append('<link rel="stylesheet" id="cssdefaultblue" href="http://localhost/trend/css/skin-colors/skin-red.css" type="text/css" media="all" />');
        head.remove('#cssdefaultblue');
        head.remove('#cssgreen');
        head.remove('#cssturquoise');
        head.remove('#cssgrey');
        head.remove('#cssorange');
        head.remove('#cssyellow');
        head.remove('#csspurple');
        jQuery(".flat-icon").flatshadow({
            fade: false,
            color: "#E84C3D",
            boxShadow: "#E84C3D"
        });
    });
    jQuery('.modeltheme_skin_switcher .yellow').click(function() {
        var head = jQuery('head');
        head.append('<link rel="stylesheet" id="cssdefaultblue" href="http://localhost/trend/css/skin-colors/skin-yellow.css" type="text/css" media="all" />');
        head.remove('#cssdefaultblue');
        head.remove('#cssgreen');
        head.remove('#cssturquoise');
        head.remove('#cssgrey');
        head.remove('#cssorange');
        head.remove('#cssred');
        head.remove('#csspurple');
        jQuery(".flat-icon").flatshadow({
            fade: false,
            color: "#F1C40F",
            boxShadow: "#F1C40F"
        });
    });
    jQuery('.modeltheme_skin_switcher .purple').click(function() {
        var head = jQuery('head');
        head.append('<link rel="stylesheet" id="csspurple" href="http://localhost/trend/css/skin-colors/skin-purple.css" type="text/css" media="all" />');
        head.remove('#cssdefaultblue');
        head.remove('#cssgreen');
        head.remove('#cssturquoise');
        head.remove('#cssgrey');
        head.remove('#cssorange');
        head.remove('#cssred');
        head.remove('#cssyellow');
        jQuery(".flat-icon").flatshadow({
            fade: false,
            color: "#9b59b6",
            boxShadow: "#9b59b6"
        });
    });
});
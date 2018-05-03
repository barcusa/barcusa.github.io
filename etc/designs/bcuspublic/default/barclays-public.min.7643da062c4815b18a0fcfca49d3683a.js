var BCUS=BCUS||{};
BCUS.RenderVanity=(function(){var a=function(h){var g=$("#"+h+"_1_image").attr("imgsrc");
var f=$("#"+h+"_1_image").attr("imgclass");
var d=$("#"+h+"_1_image").attr("bgsrc");
$("#"+h+"_1").attr("data-src-desktop",d);
var e="<img src='"+g+"' class='"+f+"' />";
$("#"+h+"_1_image").append(e);
var c=$("#"+h+"_1").attr("divStyle");
$("#"+h+"_1").attr("style",c);
var j=$("#"+h+"_1").attr("data_src_mobile")||"NA";
if(""!=j&&"NA"!=j&&null!=j){$("#"+h+"_1").attr("data-src-mobile",j)
}};
var b=function(d){var c=BCUS.CheckCookie.init(d);
if(null!=c){a(c);
$("#"+c+"_1").show();
$("#"+c+"_2").show();
$("[data-home-default-content]").hide()
}else{$("[data-home-vanity-content]").hide();
$("[data-home-default-content]").show()
}if($("[data-home-vanity-content]").css("display")=="block"){$("body").find(".footer").css({"margin-top":"0px"})
}};
return{init:b}
})();
var BCUS=BCUS||{};
BCUS.NewsroomLeftRailAnalytics=(function(){var a=function(){c()
},c=function(){$(".bcus-left-rail__item-content a").click(b)
},b=function(e){var j=$(e.currentTarget),g={bcusNewsroomLeftRailClickValue:"BCUS:Newsroom:Email"},h="o",d=j.find("a").context.href,f=d.substring(0,4);
if(f=="mail"){BCUS.Analytics.recordEvent("newsroomLeftRailClickEvent","bcuspublic/components/newsroom/newsroom-left-rail",g,"BCUS:Newsroom:Email",h)
}else{if(f=="call"||f=="tel:"){BCUS.Analytics.recordEvent("newsroomLeftRailClickEvent","bcuspublic/components/newsroom/newsroom-left-rail",g,"BCUS:Newsroom:Call",h)
}else{BCUS.Analytics.recordEvent("newsroomLeftRailClickEvent","bcuspublic/components/newsroom/newsroom-left-rail",g,"BCUS:ABOUT US:Newsroom:Logo","d")
}}};
return{init:a}
})();
var BCUS=BCUS||{};
BCUS.NewsReleaseList=(function(){var a={},k=null,h=10,f=function(){g()
},g=function(){a.articleListItems=$(".bcus-news-release-list__li");
a.articleButton=$(".bcus-news-release-list__archive-button");
if(a.articleListItems.length>10){c();
j()
}else{j();
a.articleButton.addClass("bcus-news-release-list__archive-button--disabled")
}},c=function(){a.articleButton.on("click",e);
+3
},j=function(){a.articleListItems.slice(0,h).show()
},e=function(n){n.preventDefault();
var m=a.articleListItems.length,l=$(".bcus-news-release-list__ul li:visible").length+h;
if(l<m){$(".bcus-news-release-list__u li:lt("+l+")").show()
}else{$(".bcus-news-release-list__ul li:lt("+m+")").show()
}if($(".bcus-news-release-list__ul li:visible").length==a.articleListItems.length){a.articleButton.unbind("click");
a.articleButton.addClass("bcus-news-release-list__archive-button--disabled")
}},d=function(){var q=150;
var o=$(".bcus-news-release-list_article_content");
for(var n=0;
n<o.length;
n++){var p=$(o[n]).children("p").length;
var r=$(o[n]);
var l="";
var m="";
if(p==0){l=r.text()
}else{if(p>0){l=$(o[n]).children("p:first-child").text()
}}m=l.substring(0,q);
if(m!=""){r.html("<p>"+m+"</p>")
}}},b=function(){$("div").removeClass("news-release-list");
var o=["bcus-news-col-xs-12 bcus-news-col-sm-6 bcus-news-col-md-4","bcus-news-col-xs-12 bcus-news-col-sm-6 bcus-news-col-md-5","bcus-news-col-xs-12 bcus-news-col-sm-6 bcus-news-col-md-3"];
var l=0;
var n=$(".bcus-news-grid-section .bcus-news-release-list-grid li");
for(var m=0;
m<n.length;
m++){$(n[m]).addClass(o[l]);
l++;
if(l==o.length){l=0;
o.push(o.shift())
}}};
return{init:f,limitText:d,addRandomizedGrid:b}
})();
var BCUS=BCUS||{};
BCUS.FeatureCarousel=(function(){var d={},o={slideTime:5000,fadeTime:500},r=0,b=null,h=false,c=[],s=[],g=function(){d.carouselItems=$(".bcus-home-feature-carousel-item");
d.carouselIndicators=$(".bcus-home-feature-carousel-item-banner-progress__li");
d.carouselItemButton=$(".bcus-home-feature-carousel-item-banner-button")
},f=function(){g();
q($(d.carouselIndicators[r]));
l();
u()
},u=function(){d.carouselIndicators.on("click",k);
d.carouselIndicators.on("keypress",p);
d.carouselItems.on("focusin",j);
d.carouselItems.on("focusout",l);
d.carouselItems.on("mouseenter",j);
d.carouselItems.on("mouseleave",l);
d.carouselItemButton.on("click",t)
},l=function(){if(h===false){window.clearTimeout(b);
b=window.setTimeout(function(){e()
},o.slideTime)
}},j=function(){window.clearTimeout(b);
b=null
},e=function(){d.carouselItems.eq(r).fadeOut(o.fadeTime);
if(r<(d.carouselItems.length-1)){r++
}else{r=0
}q($(d.carouselIndicators[r]));
d.carouselItems.eq(r).fadeIn(o.fadeTime);
l()
},k=function(A){var w=$(A.target).closest("li")[0];
var y=d.carouselItems.length-1,v=0,x=r||0,z=$(A.currentTarget).data("index");
if(z>y||z<v){}if(x!==z){d.carouselItems.eq(r).fadeOut(o.fadeTime);
r=z;
q(w);
d.carouselItems.eq(r).fadeIn(o.fadeTime);
j();
h=true
}},q=function(v){d.carouselIndicators.removeClass("active");
$(v).addClass("active");
m(r)
},p=function(x){var w=x.which,v=$(x.target).hasClass("bcus-home-feature-carousel-item-banner-progress__li");
if(w===13&&v){k(x)
}},m=function(w){var v=d.carouselItems.eq(w).find(".bcus-home-feature-carousel-item-banner-button").attr("data-name"),x=0;
for(;
x<s.length;
x++){s[x](v)
}},t=function(w){var v=0;
for(;
v<c.length;
v++){c[v](w)
}},a=function(v){if(v){c.push(v)
}},n=function(v){if(v){s.push(v)
}};
return{init:f,addClickThroughCallbacks:a,addViewCallbacks:n}
})();
var BCUS=BCUS||{};
BCUS.FeatureCarouselAnalytics=(function(){var f=null,c=null,b=function(g,h){c=g;
f=h;
a()
},a=function(){if(c){c.addClickThroughCallbacks(e);
c.addViewCallbacks(d)
}},e=function(h){if(h&&f){var g=$(h.currentTarget).attr("data-name");
BCUS.Analytics.recordEvent("HomeFeatureClick",f,{FeatureClickName:"BCUS: Home Carousel:"+g},"BCUS: Home Carousel:"+g)
}},d=function(g){if(g&&f){}};
return{init:b}
})();
var BCUS=BCUS||{};
BCUS.HeaderMenu=(function(){var a={},f=[],h=[],j=[],b=[],e={headerHeight:60},g=function(x,y){l();
m();
f=x;
h=y
},l=function(){a.body=$("body.public");
a.navIcons=$(".bcus-navigation__icon");
a.mainNavLink=$(".bcus-navigation__main-list-link");
a.window=$(window);
a.document=$(document);
a.alertContainer=$(".bcus-alert");
a.globalHeaderContainer=$(".global-header");
a.signInIcon=$(".bcus-navigation__icon--sign-in");
a.signInPanel=$(".login-panel");
a.mobileNavIcon=$(".bcus-navigation__icon--mobile");
a.mobileNav=$(".bcus-navigation__main-list");
if(a.alertContainer.length!=0){a.globalHeaderContainer.removeClass("global-header");
a.globalHeaderContainer.addClass("global-header--absolute");
a.globalHeaderContainer=$(".global-header--absolute")
}},m=function(){if(a.alertContainer.length!=0){a.window.on("scroll",n)
}a.mobileNavIcon.on("click",u);
a.mobileNavIcon.on("keypress",d);
a.body.on("click",q);
a.mainNavLink.on("click",w)
},o=function(y){y.preventDefault();
var x=$(y.target);
a.mobileNav.hide().removeAttr("style");
if(!a.signInIcon.hasClass("bcus-navigation__icon--disabled")){a.signInIcon.addClass("bcus-navigation__icon--disabled");
if(a.signInIcon.hasClass("bcus-navigation__icon--active")){p()
}else{a.signInPanel.slideToggle(500,function(){a.signInIcon.removeClass("bcus-navigation__icon--disabled");
t()
})
}v(a.signInIcon)
}},d=function(y){var x=y.which;
if(x===13){a.mobileNavIcon.trigger("click")
}},u=function(y){y.preventDefault();
var x=$(y.target);
a.signInPanel.hide();
if(!a.mobileNavIcon.hasClass("bcus-navigation__icon--disabled")){a.mobileNavIcon.addClass("bcus-navigation__icon--disabled");
v(a.mobileNavIcon);
a.mobileNav.slideToggle(500,function(){a.mobileNavIcon.removeClass("bcus-navigation__icon--disabled");
if(!a.mobileNavIcon.hasClass("bcus-navigation__icon--active")){a.mobileNav.removeAttr("style")
}})
}c(f,h)
},v=function(x){a.navIcons.not(x).removeClass("bcus-navigation__icon--active");
if(!x.hasClass("bcus-navigation__icon--active")){x.addClass("bcus-navigation__icon--active")
}else{x.removeClass("bcus-navigation__icon--active")
}},q=function(y){var x=$(y.target);
if(x.parents(".bcus-navigation__main").length===0){if(a.mobileNavIcon.hasClass("bcus-navigation__icon--active")){a.mobileNavIcon.removeClass("bcus-navigation__icon--active");
a.mobileNav.slideToggle(500,function(){a.mobileNav.removeAttr("style")
})
}if(a.signInIcon.hasClass("bcus-navigation__icon--active")){p()
}}},p=function(){a.signInPanel.slideToggle(500,function(){a.signInIcon.removeClass("bcus-navigation__icon--active bcus-navigation__icon--disabled")
})
},k=function(x){if(x){j.push(x)
}},s=function(x){if(x){b.push(x)
}},w=function(y){var x=0;
for(;
x<j.length;
x++){j[x](y)
}},n=function(x){if(a.document.scrollTop()>=a.alertContainer.height()){if(a.globalHeaderContainer.hasClass("global-header--absolute")){a.globalHeaderContainer.removeClass("global-header--absolute");
a.globalHeaderContainer.addClass("global-header")
}}else{a.globalHeaderContainer.removeClass("global-header");
a.globalHeaderContainer.addClass("global-header--absolute")
}},t=function(){var x=0;
for(;
x<b.length;
x++){b[x]()
}},r=function(){if($(".bcus-navigation__icon--mobile").css("display")==="block"){$("#brandedHeader").css("display","none");
$("#defaultHeader").css("display","none")
}else{c(f,h)
}},c=function(A,y){var F=$("#includeBranded").val();
var D=$("#pageFullUrl").val();
var z=$("#vanityQuery").val();
var C=$("#paramValue").val();
var x=$("#newUrl").val();
var E=$("#contactUsPath").val();
var G=BCUS.CheckCookie.init(A);
var B=BCUS.CheckCookie.init(y);
if($("[data-home-vanity-content]").size()){if((D===x||z==="null"||C==="")&&(G==null)){$("#defaultHeader").show();
$("#brandedHeader").hide()
}else{$("#brandedHeader").show();
$("#defaultHeader").hide()
}}else{if(F==="true"){if(B==null){$("#defaultHeader").show();
$("#brandedHeader").hide()
}else{$("#brandedHeader").show();
$("#defaultHeader").hide()
}}else{$("#defaultHeader").show();
$("#brandedHeader").hide()
}}};
return{init:g,addNavClickCallback:k,addNavLoginOpenCallback:s,setHeadervalue:c,onWindowResize:r}
})();
var BCUS=BCUS||{};
BCUS.HeaderMenuAnalytics=(function(){var f=null,a=null,e=function(g,h){a=g;
f=h;
d()
},d=function(){if(a){a.addNavClickCallback(b);
a.addNavLoginOpenCallback(c)
}},b=function(h){if(h&&f){var g=$(h.currentTarget).text()
}},c=function(){if(f){BCUS.Analytics.recordEvent("MainNavSignInOpen",f,{MainNavValue:"BCUS: Main Nav Login Expanded"},"BCUS: Main Nav Login Expanded")
}};
return{init:e}
})();
var BCUS=BCUS||{};
BCUS.GlobalFooter=(function(){var g={},a=[],e=function(){f();
d()
},f=function(){g.socialLink=$(".bcus-footer__social-link");
g.badgeLink=$(".bcus-footer__badge-link");
g.bottomLink=$(".bcus-footer__bottom-link")
},c=function(h){if(h){a.push(h)
}},d=function(){g.socialLink.on("click",b);
g.badgeLink.on("click",b);
g.bottomLink.on("click",b)
},b=function(j){var h=0;
for(;
h<a.length;
h++){a[h](j)
}};
return{init:e,addFooterLinkClickCallback:c}
})();
var BCUS=BCUS||{};
BCUS.GlobalFooterAnalytics=(function(){var f=null,b=null,e={social:{eventName:"FooterSocialClick",varName:"FooterClickValue",prefix:"BCUS:"},badge:{eventName:"FooterBadgeClick",varName:"FooterClickValue",prefix:"BCUS:"},bottom:{eventName:"FooterLinkClick",varName:"FooterClickValue",prefix:"BCUS:"}},d=function(h,g){b=h;
f=g;
c()
},c=function(){if(b){b.addFooterLinkClickCallback(a)
}},a=function(m){var k=$(m.currentTarget),j=k.attr("class"),h=j.replace(/bcus-footer__|-link/gi,""),g=h.replace(/footers-list /,""),o=e[g],n={},l=k.attr("data-analytics-id")||k.text();
n[o.varName]=o.prefix+l;
if(h&&f){if(h!="bottom"){if(h=="social"){BCUS.Analytics.recordEvent(o.eventName,f,n,"BCUS:Footer Social:"+l,"e")
}else{if(h=="badge"){BCUS.Analytics.recordEvent(o.eventName,f,n,"BCUS:Footer Badge:"+l,"e")
}}}else{if(l==="Cardmember agreements"){BCUS.Analytics.recordEvent(o.eventName,f,n,o.prefix+l,"e")
}else{if(l==="Careers"){BCUS.Analytics.recordEvent(o.eventName,f,n,o.prefix+l,"e")
}}}}};
return{init:d}
})();
var BCUS=BCUS||{},FlexibleContent=function(a){this.init(a)
};
FlexibleContent.prototype={_cache:{},init:function(a){this.options=a||{};
if(a.el){this._cache.el=a.el
}if(a.hasImage){this._hasImage=a.hasImage
}if(a.imagePlacement){this._imagePlacement=a.imagePlacement
}if(a.fullWidth){this._fullWidth=a.fullWidth
}FlexibleContent.prototype._count=FlexibleContent.prototype._count||0;
this.count=FlexibleContent.prototype._count;
FlexibleContent.prototype._count++;
this._setupCache();
this._updateClass()
},_setupCache:function(){this._cache.contentContainer=this._cache.el[this.count]
},_updateClass:function(){var a="flexible-content--no-image";
if(this._hasImage==="true"){a="flexible-content--has-image flexible-content--has-image-"+this._imagePlacement
}if(this.count===0){a+=" flexible-content--first"
}if(this._fullWidth==="true"){a+=" flexible-content--full-width"
}$(this._cache.contentContainer).addClass(a)
}};
var BCUS=BCUS||{};
BCUS.FlexiableContentAnalytics=(function(){var c=function(){b()
},b=function(){$(".bcus-flexible-content__copy a[href]").click(a)
},a=function(j){var h=$(j.currentTarget),g=h.data("linkTracking"),k={bcusFlexiableContentClickValue:g},f=((h.prop("href").indexOf("http://")>-1)||(h.prop("href").indexOf("https://")>-1))?"e":"o",d=h.context.parentNode.innerHTML;
if(h.context.parentNode.innerHTML.indexOf("General inquiries")>-1){BCUS.Analytics.recordEvent("flexiableContentClickEvent","bcuspublic/components/flexible-content",k,"BCUS:ContactUS:General Inquiries:Call","o")
}else{if(h.context.parentNode.innerHTML.indexOf("Credit card activation")>-1){BCUS.Analytics.recordEvent("flexiableContentClickEvent","bcuspublic/components/flexible-content",k,"BCUS:ContactUS:Card Activation:Call","o")
}else{if(h.context.parentNode.innerHTML.indexOf("International")>-1){BCUS.Analytics.recordEvent("flexiableContentClickEvent","bcuspublic/components/flexible-content",k,"BCUS:International Call:Call","o")
}else{if(h.context.innerHTML.indexOf("@AskBCUSTOMER")>-1){BCUS.Analytics.recordEvent("flexiableContentClickEvent","bcuspublic/components/flexible-content",k,"BCUS:Contact Us:Twitter","e")
}else{if(h.context.parentNode.innerHTML.indexOf("By Email:")>-1){BCUS.Analytics.recordEvent("flexiableContentClickEvent","bcuspublic/components/flexible-content",k,"BCUS:Contact Us:Complaint Policy: Call","e")
}else{if(h.context.parentNode.innerHTML.indexOf("quick transactions")>-1){BCUS.Analytics.recordEvent("flexiableContentClickEvent","bcuspublic/components/flexible-content",k,"BCUS:ContactUS:Self Serve:Call","o")
}}}}}}};
return{init:c}
})();
$(function(){if(typeof Content!=="undefined"){BCUS.FlexiableContentAnalytics.init()
}});
$(function(){$("section.find-a-card ul.catagories li").click(function(){$("section.find-a-card ul.catagories li").removeClass("active");
$(this).addClass("active")
})
});
var BCUS=BCUS||{};
BCUS.TextAnalytics=(function(){var c=function(){b()
},b=function(){$("a").click(a)
},a=function(g){var f=$(g.currentTarget);
var d=f.context.innerHTML;
if(d.indexOf("Download")>-1){BCUS.Analytics.recordEvent("TextClickEvent","bcuspublic/components/content/text","","BCUS:Privacy Policy:Full Policy","d")
}else{if(f.context.parentNode.innerHTML.indexOf("By Email:")>-1){BCUS.Analytics.recordEvent("TextClickEvent","bcuspublic/components/content/text","","BCUS:Contact Us:Complaint Policy: Call","e")
}}};
return{init:c}
})();
var BCUS=BCUS||{};
BCUS.SimpleHero=(function(){var a={},b={mobileBreakpoint:"480",isMobile:false,heroImage:"",mobileHeroImage:""},f=function(l){j();
c();
if(l){e({isMobile:h(),heroImage:l.heroImage,mobileHeroImage:l.mobileHeroImage})
}},j=function(){a.heroContainer=$(".bcus-simple-hero-container");
a.window=$(window)
},c=function(){a.window.on("resize",BCUS.Utils.resize(g,150))
},k=function(){if(b.isMobile&&b.mobileHeroImage){a.heroContainer.css("background","url("+b.mobileHeroImage+") center 0px no-repeat scroll")
}else{a.heroContainer.css("background","url("+b.heroImage+") center 0px no-repeat scroll")
}},g=function(){e({isMobile:h()})
},e=function(l){b=_.extend({},b,l);
d()
},d=function(){k()
},h=function(){return BCUS.Utils.isBelowBreakpoint(b.mobileBreakpoint)
};
return{init:f}
})();
var BCUS=BCUS||{};
BCUS.PageHeroAnalytics=(function(){var c=function(){b()
},b=function(){$(".bcus-page-hero__component__body-text a[data-link-tracking]").click(a)
},a=function(h){var g=$(h.currentTarget),f=g.data("linkTracking"),j={bcusPageHeroClickValue:f},d=((g.prop("href").indexOf("http://")>-1)||(g.prop("href").indexOf("https://")>-1))?"e":"o";
BCUS.Analytics.recordEvent("pageHeroClickEvent","bcuspublic/components/content/pagehero",j,f,d)
};
return{init:c}
})();
var BCUS=BCUS||{};
BCUS.HomeExplorer=(function(){var h={},a=null,f=function(){g();
e();
b()
},g=function(){h.icon=$(".bcus-home-explorer__icon-container");
h.intro=$(".bcus-home-explorer__intro");
h.body=$("body")
},e=function(){h.icon.on("mouseover",d);
h.icon.on("mouseout",d)
},b=function(){a=h.intro.text()||""
},c=function(){if(h.body.hasClass("isTouch")){return true
}return false
},d=function(l){var k=l.type,j=l.target,m=a;
if(c()){return
}if(k==="mouseover"){if(j.className.indexOf("bcus-home-explorer__icon-container")===-1){j=l.target.parentElement
}m=j.getAttribute("data-description")
}h.intro.text(m)
};
return{init:f}
})();
$(function(){var d=$(".bcus-card-details__hero-bg"),b=d.find("span[data-src]"),a=function(){var e=d.css("background-image"),f='url("',h='")',g=e&&e.indexOf(f)===0?e.substring(f.length,e.length-h.length):null,j;
if(g){b.each(function(){var k=$(this),l=k.data("src");
if(l&&g.indexOf(l)>-1){j=k.data("title")
}})
}if(j){d.attr("title",j)
}},c;
$(window).on("resize",function(){if(!c){c=setTimeout(function(){a();
c=null
},1000)
}});
a()
});
var BCUS=BCUS||{};
BCUS.Animate=(function(g,e){var c={},j={duration:150,staggerDelay:200,tickLength:16,animateClass:".animate"},a=null,d=null,h=g.requestAnimationFrame,k=function(n){if(n){for(var o in n){if(j.hasOwnProperty(o)){j[o]=n[o]
}}}m();
if(!e.csstransitions){$.each(c.gridListArray,function(p,q){$(q).removeClass("bcus__animate--hidden")
})
}else{b()
}},m=function(){c.gridListArray=$(".bcus-card-results__grid-item-inner");
c.gridContainerEl=$(".bcus-card-results__grid-view");
c.window=$(g)
},b=function(o){var n=o||c.gridListArray;
if(a){clearTimeout(a)
}if(d){clearTimeout(d)
}$.each(n,function(p,q){if(!$(q).hasClass("th")){$(q).addClass("bcus__animate--hidden")
}a=setTimeout(function(){$(q).addClass("animate fadeInUp")
},p*j.duration)
});
d=setTimeout(function(){$.each(n,function(p,q){$(q).removeClass("animate fadeInUp bcus__animate--hidden")
})
},n.length*j.duration)
},l=function(o){var n=function(){o.style.opacity=+o.style.opacity+0.06;
if(+o.style.opacity<1){(g.requestAnimationFrame&&h(n))||setTimeout(n,j.tickLength)
}};
n()
},f=function(p){var r=c.window.scrollTop(),q=r+c.window.height(),n=$(p).offset().top,o=n+$(p).height();
return((o<=q)&&(n>=r))
};
return{init:k,runAnimation:b}
})(window,Modernizr);
var BCUS=BCUS||{};
BCUS.CardResultsAnalytics=(function(){var f=null,d=function(g){f=g;
c()
},c=function(){$(".bcus-card-results__card-link, .bcus-card-results__list-card-link").on("click",e);
$(".bcus-card-results__list-cta-button").on("click",b)
},e=function(j){var h=$(j.currentTarget),g={bcusCardClicked:"BCUS:cards:"+h.attr("data-cpc")+":clicked"};
if(h.hasClass("bcus-card-results__card-link")){g.bcusResultsCardIndex=h.parent().parent().index();
g.bcusResultsViewType="grid"
}a(g,"BCUS:cards:"+h.attr("data-cpc")+":clicked")
},b=function(k){var j=$(k.currentTarget),g="BCUS:cards:"+j.closest(".bcus-card-results__list-cta-container").siblings(".bcus-card-results__list-card-link").attr("data-cpc")+":clicked",h={bcusResultsCardIndex:j.closest(".bcus-card-results__item").index(),bcusResultsViewType:"list",bcusCardClicked:g};
a(h,g)
},a=function(h,g){if(h){}};
return{init:d}
})();
var BCUS=BCUS||{};
BCUS.CardResults=(function(){var n={},K="list",f="grid",u={list:{compareClass:"bcus-card-results__list-compare",compareImgClass:"bcus-card-results__list-card-image"},grid:{compareClass:"bcus-card-results__grid-compare",compareImgClass:"bcus-card-results__grid-card-image"}},a={random:false,allowComparison:true,showCardsJson:[],showCardsMap:{},showAllCards:true,initialized:false,currentView:f,showMoreButtonJumpCount:5,showMoreButtonClickCount:0,currentCompareClasses:{},compareCartFull:false,priorityCards:[],priorityCardsMap:{},compareCards:[],compareCardsCpc:[],appliedFilters:{tags:{receive:[],spend:[],perks:[],parentBrowseFilters:[]}}},C=[],O=function(T){if(T){var W={};
if(T.priorityCards){_.each(T.priorityCards,function(X){W[X.name]=true
})
}var U={};
if(T.showCardsJson){_.each(T.showCardsJson,function(Y){var X=Y.lastIndexOf("/");
if(X>-1){U[Y.substring(X+1)]=true
}else{U[Y]=true
}})
}a=_.extend({},a,T);
a.showCardsMap=U;
a.priorityCardsMap=W;
a.currentCompareClasses=u[a.currentView];
a.allowComparison=T.allowComparison
}if(G()){l();
N()
}else{if(a.random){I()
}o();
N()
}y();
g();
var V=window.location.hash?window.location.hash.substring(1):"";
a.appliedFilters=c(V);
d();
L();
a.initialized=true;
D(C)
},d=function(){if(BCUS.DataStoreManager){var W=BCUS.DataStoreManager.getData("compare-data")?BCUS.DataStoreManager.getData("compare-data").split(","):[],U=BCUS.DataStoreManager.getData("card-cpc-array")?BCUS.DataStoreManager.getData("card-cpc-array").split(","):[];
if(W.length>U.length){for(var T=0;
T<W.length;
T++){var V=$("."+a.currentCompareClasses.compareClass+'-container[data-card-name="'+W[T]+'"]').data("cpc");
if($.inArray(V,U)===-1){U.push(V)
}}}q({compareCards:W,compareCardsCpc:U})
}},G=function(){var T=$(".bcus-card-results__grid-item").size();
return BCUS.DataStoreManager&&!!BCUS.DataStoreManager.getData("gridOrderHtml")&&$(""+BCUS.DataStoreManager.getData("gridOrderHtml")).find(".bcus-card-results__grid-item").size()===T
},l=function(){var T=BCUS.DataStoreManager.getData("gridOrderHtml");
if(T){$(".bcus-card-results__grid-view")[0].innerHTML=T
}},o=function(){BCUS.DataStoreManager.storeData("gridOrderHtml",$(".bcus-card-results__grid-view")[0].innerHTML)
},I=function(){var V=$(".bcus-card-results__grid")[0],T=V.children.length,U,W=a.priorityCards.length?a.priorityCards.length-1:0;
for(;
T>=0;
T--){U=Math.floor(Math.random()*T)+a.priorityCards.length;
$(V.children[U]).insertAfter(V.children[W])
}},N=function(){var T=$(".bcus-card-results__grid")[0],W=$(".bcus-card-results__list")[0];
if(T&&W){for(var U=0;
U<T.children.length;
U++){var V=$('.bcus-card-results__list-item[data-card-name="'+$(T.children[U]).data("cardName")+'"]')[0];
if(V){W.appendChild(V)
}}}},y=function(){n.seeMoreBtn=$("#seeMoreCards");
n.cards={};
n.cards[f]=$(".bcus-card-results__grid-item");
n.cards[K]=$(".bcus-card-results__list-item");
n.toggleBtn=$(".bcus__togle-container-list-item");
n.gridBtn=$("#grid");
n.listBtn=$("#list");
n.gridview=$(".bcus-card-results__grid-inner-container");
n.listview=$(".bcus-card-results__list-view");
n.compareIcons=$("."+a.currentCompareClasses.compareClass+"-container");
n.window=$(window);
n.body=$("body")
},g=function(){n.seeMoreBtn.on("click",m);
n.toggleBtn.on("click",t);
n.window.on("hashchange",h);
n.cards[f].on("mouseover",s);
n.cards[f].on("mouseout",p);
n.compareIcons.off().on("click keypress",H);
z()
},m=function(T){q({showMoreButtonClickCount:a.showMoreButtonClickCount+1})
},t=function(T){q({currentView:this.id,currentCompareClasses:u[this.id]})
},H=function(X){X.preventDefault();
var aa=$(X.target).data("card-name"),W=$(X.target).data("cpc"),T=a.compareCards.slice(0),Z=a.compareCardsCpc.slice(0),V=T.indexOf(aa),U=Z.indexOf(W),Y=false;
if(V>-1||U>-1){if(V>-1){T.splice(V,1)
}if(U>-1){Z.splice(U,1)
}}else{if(a.compareCards.length===3){Y=$(X.target)
}else{T.push(aa);
Z.push(W)
}}q({compareCards:T.slice(0),compareCardsCpc:Z.slice(0),compareCartFull:Y})
},h=function(U){var T=window.location.hash?window.location.hash.substring(1):"";
q({appliedFilters:c(T)})
},s=function(U){U.preventDefault();
var T=$(this).find(".bcus-card-results__grid-item-inner");
if(n.body.hasClass("isTouch")){return
}T.addClass("bcus-card-results__grid-item-inner--active");
T.find(".bcus-card-results__grid-cta-container").addClass("bcus-card-results__grid-cta-container--details-visible");
T.find(".bcus-card-results__grid-item-details").removeClass("bcus-card-results__grid-item--hidden")
},p=function(U){U.preventDefault();
var T=$(this).find(".bcus-card-results__grid-item-inner");
T.removeClass("bcus-card-results__grid-item-inner--active");
T.find(".bcus-card-results__grid-cta-container").removeClass("bcus-card-results__grid-cta-container--details-visible");
T.find(".bcus-card-results__grid-item-details").addClass("bcus-card-results__grid-item--hidden")
},z=function(){if(a.currentView===f){n.compareIcons.on("mouseover",E);
n.compareIcons.on("mouseout",R)
}else{n.compareIcons.on("mouseover",Q);
n.compareIcons.on("mouseout",j)
}},Q=function(U){var T=$(U.target),V=$(".bcus-compare__compare-cart-list-item--placeholder").length;
if(V===0&&!(T.hasClass("bcus-card-results__list-compare--selected"))){if(BCUS.Popover){if(e()){BCUS.Popover.createPopover(T,"Remove a card first.",{x:-18,y:25},"up")
}else{BCUS.Popover.createPopover(T,"Remove a card first.",{x:0,y:55},"up")
}}}},j=function(U){var T=$(U.target),V=$(".bcus-compare__compare-cart-list-item--placeholder").length;
if(V===0&&!(T.hasClass("bcus-card-results__list-compare--selected"))){if(BCUS.Popover){BCUS.Popover.destroyPopover()
}}},E=function(U){var T=$(U.target),V=$(".bcus-compare__compare-cart-list-item--placeholder").length;
if(V===0&&!(T.hasClass("bcus-card-results__grid-compare--selected"))){if(BCUS.Popover){BCUS.Popover.createPopover(T,"Remove a card first.",{x:-120,y:-40},"down")
}T.addClass("bcus-card-results__grid-compare--inactive")
}else{T.addClass("bcus-card-results__grid-compare--active")
}},R=function(U){var T=$(U.target),V=$(".bcus-compare__compare-cart-list-item--placeholder").length;
if(V===0){if(BCUS.Popover){BCUS.Popover.destroyPopover()
}T.removeClass("bcus-card-results__grid-compare--inactive")
}else{T.removeClass("bcus-card-results__grid-compare--active")
}},w=function(T){if(T){if(a.initialized){D([T])
}C.push(T)
}},q=function(T){a=_.extend({},a,T);
var U=x(a.appliedFilters);
U=U?"#"+U:"";
if(window.location.hash!==U){n.window.off("hashchange",h);
n.window.one("hashchange",function(){n.window.on("hashchange",h)
});
window.location.hash=U
}D(C);
L()
},B=function(U){var T={tags:{receive:a.appliedFilters.tags.receive.slice(),spend:a.appliedFilters.tags.spend.slice(),perks:a.appliedFilters.tags.perks.slice(),parentBrowseFilters:a.appliedFilters.tags.parentBrowseFilters.slice()}};
if(U.tags.receive){T.tags.receive=U.tags.receive.slice()
}if(U.tags.spend){T.tags.spend=U.tags.spend.slice()
}if(U.tags.perks){T.tags.perks=U.tags.perks.slice()
}if(U.tags.parentBrowseFilters){T.tags.parentBrowseFilters=U.tags.parentBrowseFilters.slice()
}q({appliedFilters:T})
},L=function(){F();
A();
M();
if(!a.initialized){if(BCUS.Animate){BCUS.Animate.init()
}}},F=function(){if(a.currentView===f){n.listBtn.removeClass("active");
n.gridBtn.addClass("active");
n.listview.hide();
n.gridview.show()
}else{n.gridBtn.removeClass("active");
n.listBtn.addClass("active");
n.gridview.hide();
n.listview.show()
}},A=function(){var Z=n.cards[f].length,Y=v(),X=0,V,W,U=["bcus-card-results__item--filtered-large","bcus-card-results__item--filtered-medium","bcus-card-results__item--filtered","bcus-card-results__item--hidden"],T=[];
n.cards[f].each(function(ad){var aa=$(this),ae=aa.data("cardName"),ac="",ab=["bcus-card-results__item--filtered"];
if(Y.filteredCards.length<Z){W=X%9;
V=X%4;
if(W===1||W===3||W===8){ab.push("bcus-card-results__item--filtered-large")
}if(V===1||V===2){ab.push("bcus-card-results__item--filtered-medium")
}aa.removeClass(U.join(" "));
aa.addClass(ab.join(" "))
}else{aa.removeClass(U.join(" "))
}if(Y.displayedCardsMap[ae]){aa.show();
X++;
if(!aa.data("animated")){T.push(aa[0].childNodes[1]);
aa.data("animated",true)
}}else{aa.data("animated",false);
aa.hide()
}if(!a.initialized){V=ad%4;
W=ad%9;
if(V===1||V===2){ac+=" bcus-card-results__grid-item-925--large"
}if(W===1||W===3||W===8){ac+=" bcus-card-results__grid-item-1240--large"
}aa.addClass(ac)
}});
if(BCUS.Animate){BCUS.Animate.runAnimation(T)
}n.cards[K].each(function(){var aa=$(this),ab=aa.data("cardName");
if(Y.displayedCardsMap[ab]){aa.show()
}else{aa.hide()
}});
if(Y.displayedCards.length<Y.filteredCards.length){n.seeMoreBtn.show()
}else{n.seeMoreBtn.hide()
}},M=function(){n.compareIcons=$("."+a.currentCompareClasses.compareClass+"-container");
if(a.allowComparison){n.compareIcons.show();
n.compareIcons.off().on("click keypress",H);
z();
k()
}else{n.compareIcons.hide()
}},k=function(){if(BCUS.DataStoreManager){BCUS.DataStoreManager.storeData("compare-data",a.compareCards);
BCUS.DataStoreManager.storeData("card-cpc-array",a.compareCardsCpc)
}},b=function(U){var X=U.data("cardReceiveTags")?" "+U.data("cardReceiveTags").trim()+" ":"",V=U.data("cardSpendTags")?" "+U.data("cardSpendTags").trim()+" ":"",W=U.data("cardPerksTags")?" "+U.data("cardPerksTags").trim()+" ":"",T=U.data("cardFilterTags")?" "+U.data("cardFilterTags").trim()+" ":"";
return !S(X,a.appliedFilters.tags.receive)||!S(V,a.appliedFilters.tags.spend)||!S(W,a.appliedFilters.tags.perks)||!S(T,a.appliedFilters.tags.parentBrowseFilters)
},S=function(V,U){var T=true;
_.each(U,function(W){T=T&&V.indexOf(" "+W+" ")>-1
});
return T
},P=function(T){var U=T.data("cardName");
return a.showAllCards||a.priorityCardsMap[U]||a.showCardsMap[U]
},D=function(T){var V=v();
var U={compareCards:a.compareCards,currentCompareClasses:_.extend({},a.currentCompareClasses),displayableCardCount:V.displayableCards.length,filteredCardCount:V.filteredCards.length,displayedCardCount:V.displayedCards.length,compareCartFull:a.compareCartFull,appliedFilters:{tags:{receive:a.appliedFilters.tags.receive.slice(),spend:a.appliedFilters.tags.spend.slice(),perks:a.appliedFilters.tags.perks.slice(),parentBrowseFilters:a.appliedFilters.tags.parentBrowseFilters.slice()}}};
_.each(T,function(W){W(U)
})
},v=function(){var V={displayableCards:[],displayableCardsMap:{},filteredCards:[],filteredCardsMap:{},displayedCards:[],displayedCardsMap:{}},T=0,U=a.showMoreButtonJumpCount>0&&a.priorityCards.length>0?a.showMoreButtonJumpCount*a.showMoreButtonClickCount:-1;
n.cards[f].each(function(){var W=$(this),X=W.data("cardName");
if(P(W)){V.displayableCards.push(X);
V.displayableCardsMap[X]=true;
if(!b(W)){V.filteredCards.push(X);
V.filteredCardsMap[X]=true;
if(a.priorityCardsMap[X]){V.displayedCards.push(X);
V.displayedCardsMap[X]=true
}else{if(T<U||U===-1){V.displayedCards.push(X);
V.displayedCardsMap[X]=true;
T++
}}}}});
if(V.displayedCards.length===0){V.displayedCards=V.filteredCards.slice();
V.displayedCardsMap=_.extend({},V.filteredCardsMap)
}return V
},c=function(U){var T={tags:{receive:[],spend:[],perks:[],parentBrowseFilters:[]}};
if(U){var V=U.split("/");
if(V.length>=1){T.tags.receive=r(V[0],"bcuspublic:receive/")
}if(V.length>=2){T.tags.spend=r(V[1],"bcuspublic:spend/")
}if(V.length>=3){T.tags.perks=r(V[2],"bcuspublic:perks/")
}if(V.length>=4){T.tags.parentBrowseFilters=r(V[3],"bcuspublic:parentBrowseFilters/")
}}return T
},x=function(T){return J(T.tags.receive,"bcuspublic:receive/")+"/"+J(T.tags.spend,"bcuspublic:spend/")+"/"+J(T.tags.perks,"bcuspublic:perks/")+"/"+J(T.tags.parentBrowseFilters,"bcuspublic:parentBrowseFilters/")
},r=function(U,T){return U?[T+U]:[]
},J=function(T,U){var V="";
if(!_.isEmpty(T)){if(T[0].indexOf(U)===0){V=T[0].substring(U.length)
}}return V
},e=function(){var T=window.innerWidth||document.documentElement.clientWidth;
if(T>480){return false
}return true
};
return{init:O,setFilterState:B,addStateUpdatedListener:w}
})();
var BCUS=BCUS||{};
BCUS.CardExplorer=(function(){var K={resultsDefault:"Showing all cards",filterSuffixes:{receive:"rewards",spend:"spending",perks:""},mobile:{resultsDelineator:", ",results:{partA:"",partB:" of ",partC:""},filterDefault:"Filter Cards"},desktop:{resultsDelineator:" | ",results:{partA:"Showing ",partB:" of ",partC:" for:"},filterDefault:""},mobileBreakpoint:768,twoColumn:{start:924,end:1240}},q={},c={options:{},isMobile:false,filterButtonHidden:false,mobileNavActive:false,mobileNavRightCtaEnabled:false,activeCategory:"receive",displayableCardCount:0,filteredCardCount:0,displayedCardCount:0,appliedFilters:{tags:{receive:[],spend:[],perks:[]}},tempFilters:{tags:{receive:[],spend:[],perks:[]}}},e=[],I=function(N){if(N){var O=_.extend({},K,N);
O.filterSufixes=_.extend({},K.filterSuffixes,N.filterSuffixes||{});
O.mobile=_.extend({},K.mobile,N.mobile||{});
O.desktop=_.extend({},K.desktop,N.desktop||{});
O.twoColumn=_.extend({},K.twoColumn,N.twoColumn||{});
if(O.disabled!=="true"){y();
j();
if(BCUS.CardResults){BCUS.CardResults.addStateUpdatedListener(G)
}c.options=O;
if(f()){c.isMobile=true;
c.filterButtonHidden=true
}E()
}}},y=function(){q.categoryText=$(".bcus-card-explorer__category-label");
q.categoryTextContainer=$(".bcus-card-explorer__tab-list-item");
q.categoryIcons=$(".bcus-card-explorer__tab-category-list-item");
q.resultsContainer=$(".bcus-card-explorer__results");
q.resultsText=$(".bcus-card-explorer__results-copy");
q.resultsFilters=$(".bcus-card-explorer__results-filters");
q.resultsClear=$(".bcus-card-explorer__results-clear-link");
q.header=$(".bcus-card-explorer__header");
q.explorerTabs=$(".bcus-card-explorer__explorer-tabs");
q.mobileNav=$(".bcus-card-explorer__mobile-nav");
q.mobileNavLeftCta=$(".bcus-card-explorer__mobile-nav-left-cta");
q.mobileNavRightCta=$(".bcus-card-explorer__mobile-nav-right-cta");
q.desktopFilterButton=$(".bcus-card-explorer__explorer-tabs--default");
q.body=$("body");
q.scrollBody=$("html, body");
q.window=$(window)
},j=function(){q.categoryTextContainer.on("keypress",n);
q.categoryText.on("click",v);
q.categoryIcons.on("click",w);
q.resultsClear.on("click",D);
q.resultsClear.on("keypress",h);
q.window.on("resize",z(l,150));
q.explorerTabs.on("click",function(){r({filterButtonHidden:true})
});
q.desktopFilterButton.on("keypress",function(){r({filterButtonHidden:true})
});
q.resultsFilters.on("click",d);
q.mobileNavLeftCta.on("click",p);
q.mobileNavRightCta.on("click",M)
},n=function(N){if(N.keyCode===13){if(N.target.className.indexOf("tab-category")>-1){w(N)
}else{v(N)
}}},v=function(O){var N=O.target;
if(!c.isMobile){if(N.className.indexOf("tab")===-1){N=N.parentNode
}r({activeCategory:N.getAttribute("data-tab-id")})
}if(O.keyCode!==13){N.blur()
}},w=function(W){var U=m(W),S=$(U),R=S.data("filter"),N=S.parents(".bcus-card-explorer__tab-list-item").data("tabId");
if(R&&N){if(!c.isMobile){var P=L(c.appliedFilters);
if(P.tags[N]&&P.tags[N][0]===R){P.tags[N]=[]
}else{P.tags[N]=[R]
}if(BCUS.CardResults){BCUS.CardResults.setFilterState(P)
}if(W.keyCode!==13){U.blur()
}}else{var O={tempFilters:L(c.tempFilters)};
if(O.tempFilters.tags[N]&&O.tempFilters.tags[N][0]===R){O.tempFilters.tags[N]=[]
}else{O.tempFilters.tags[N]=[R]
}r(O)
}var T=c.appliedFilters.tags.receive[0]?B(c.appliedFilters.tags.receive[0]):"",V=c.appliedFilters.tags.spend[0]?B(c.appliedFilters.tags.spend[0]):"",Q=c.appliedFilters.tags.perks[0]?B(c.appliedFilters.tags.perks[0]):"";
for(;
i<e.length;
i++){e[i](T,V,Q,W)
}}},D=function(){if(BCUS.CardResults){BCUS.CardResults.setFilterState({tags:{receive:[],spend:[],perks:[]}})
}},h=function(N){if(N.keyCode===13){if(BCUS.CardResults){BCUS.CardResults.setFilterState({tags:{receive:[],spend:[],perks:[]}})
}}},z=function(P,O){var N;
return function(){var S=this,R=arguments,Q=function(){N=null;
if(P){P.apply(S,R)
}};
clearTimeout(N);
N=setTimeout(Q,O)
}
},l=function(){r({isMobile:f()})
},d=function(){if(!c.isMobile){return
}r({tempFilters:L(c.appliedFilters),mobileNavActive:true})
},p=function(){if(!c.isMobile){return
}r({mobileNavActive:false,tempFilters:{tags:{receive:[],spend:[],perks:[]}}});
q.scrollBody.animate({scrollTop:0},500)
},M=function(){if(c.isMobile){if(!_.isEqual(c.tempFilters.tags.receive,c.appliedFilters.tags.receive)||!_.isEqual(c.tempFilters.tags.spend,c.appliedFilters.tags.spend)||!_.isEqual(c.tempFilters.tags.perks,c.appliedFilters.tags.perks)){if(BCUS.CardResults){BCUS.CardResults.setFilterState(L(c.tempFilters))
}r({mobileNavActive:false,tempFilters:{tags:{receive:[],spend:[],perks:[]}}});
q.scrollBody.animate({scrollTop:0},500)
}}},r=function(N){c=_.extend({},c,N);
E()
},G=function(O){var N=O.displayableCardCount!==c.displayableCardCount||O.filteredCardCount!==c.filteredCardCount||O.displayedCardCount!==c.displayedCardCount||!_.isEqual(O.appliedFilters.tags.receive,c.appliedFilters.tags.receive)||!_.isEqual(O.appliedFilters.tags.spend,c.appliedFilters.tags.spend)||!_.isEqual(O.appliedFilters.tags.perks,c.appliedFilters.tags.perks);
if(N){r({displayableCardCount:O.displayableCardCount,filteredCardCount:O.filteredCardCount,displayedCardCount:O.displayedCardCount,appliedFilters:L(O.appliedFilters)})
}},E=function(){o();
C();
x();
J();
A();
F();
H();
g();
b();
s()
},o=function(){var O=c.isMobile?"mobile":"desktop",N;
if(_.isEmpty(c.appliedFilters.tags.receive)&&_.isEmpty(c.appliedFilters.tags.spend)&&_.isEmpty(c.appliedFilters.tags.perks)){N=c.options[O].filterDefault;
q.resultsContainer.removeClass("bcus-card-explorer__results--filtered")
}else{N=t();
q.resultsContainer.addClass("bcus-card-explorer__results--filtered")
}q.resultsFilters.text(N)
},C=function(){if(_.isEmpty(c.appliedFilters.tags.receive)&&_.isEmpty(c.appliedFilters.tags.spend)&&_.isEmpty(c.appliedFilters.tags.perks)){q.resultsClear.addClass("bcus-card-explorer__results-clear-link--hidden")
}else{q.resultsClear.removeClass("bcus-card-explorer__results-clear-link--hidden")
}},x=function(){var P=c.isMobile?"mobile":"desktop",R=c.options[P].results.partA,O=c.options[P].results.partB,Q=c.options[P].results.partC,N="";
if(c.displayedCardCount===c.displayableCardCount){R=c.options.resultsDefault
}else{if(c.displayedCardCount===c.filteredCardCount){if(c.filteredCardCount>1){N="s"
}R+="<strong>"+c.filteredCardCount+"</strong> result"+N
}else{if(c.displayedCardCount<c.filteredCardCount){if(c.filteredCardCount>1){N="s"
}R+="<strong>"+c.displayedCardCount+"</strong>"+O+"<strong>"+c.filteredCardCount+"</strong> result"+N
}}}if(!_.isEmpty(c.appliedFilters.tags.receive)||!_.isEmpty(c.appliedFilters.tags.spend)||!_.isEmpty(c.appliedFilters.tags.perks)){R+=Q
}q.resultsText.html(R)
},s=function(){if(c.isMobile){var P=46,O=(q.resultsFilters[0].offsetWidth-P)/7,N=t()||c.options.mobile.filterDefault;
if(a(N).length>O){N=N.substring(0,O)+"..."
}q.resultsFilters[0].innerText=N
}},J=function(){var O=q.resultsFilters[0].innerText,P=q.resultsText[0].innerText,N="Filtered by "+O;
if(O==="Filter Cards"){N="No filters";
O="with no filters"
}q.resultsContainer[0].setAttribute("aria-label",N);
q.resultsText[0].setAttribute("aria-label",P+" "+O)
},A=function(){if(!c.isMobile&&!c.filterButtonHidden){q.desktopFilterButton.addClass("bcus-card-explorer__explorer-tabs--default-desktop")
}else{q.explorerTabs.removeClass("bcus-card-explorer__explorer-tabs--default bcus-card-explorer__explorer-tabs--default-desktop")
}},F=function(){if(c.mobileNavActive===true){q.body.addClass("bcus-card-explorer__mobile-filters--visible")
}else{q.body.removeClass("bcus-card-explorer__mobile-filters--visible")
}},H=function(){if(_.isEqual(c.tempFilters.tags.receive,c.appliedFilters.tags.receive)&&_.isEqual(c.tempFilters.tags.spend,c.appliedFilters.tags.spend)&&_.isEqual(c.tempFilters.tags.perks,c.appliedFilters.tags.perks)){q.mobileNavRightCta.removeClass("bcus-button bcus-button--blue bcus-card-explorer__mobile-nav-right-cta--enabled")
}else{q.mobileNavRightCta.addClass("bcus-button bcus-button--blue bcus-card-explorer__mobile-nav-right-cta--enabled")
}},g=function(){var N=c.isMobile?"mobile":"desktop";
q.categoryTextContainer.each(function(){var Q=$(this),T=Q.data("tabId"),S=Q.find(".bcus-card-explorer__tab"),R=c.appliedFilters.tags[T]?c.appliedFilters.tags[T]:[],P=c.tempFilters.tags[T]?c.tempFilters.tags[T]:[],O=Q.find(".bcus-card-explorer__tab-category-list-item");
if(c.activeCategory===T){Q.addClass("bcus-card-explorer__tab-list-item--active");
S.addClass("bcus-card-explorer__tab--active")
}else{Q.removeClass("bcus-card-explorer__tab-list-item--active");
S.removeClass("bcus-card-explorer__tab--active")
}if(R.length===0){Q.removeClass("bcus-card-explorer__tab-list-item--completed")
}else{Q.addClass("bcus-card-explorer__tab-list-item--completed")
}O.each(function(){var V=$(this),U=V.data("filter");
if(_.contains(R,U)){V.addClass("bcus-card-explorer__tab-category-list-item--selected")
}else{V.removeClass("bcus-card-explorer__tab-category-list-item--selected")
}if(_.contains(P,U)){V.addClass("bcus-card-explorer__tab-category-list-item--temp")
}else{V.removeClass("bcus-card-explorer__tab-category-list-item--temp")
}});
Q[0].children[0].innerText=c.options[N][T]
})
},b=function(){if(_.isEmpty(c.appliedFilters.tags.receive)&&_.isEmpty(c.appliedFilters.tags.spend)&&_.isEmpty(c.appliedFilters.tags.perks)){q.header.removeClass("bcus-card-explorer__header--hidden")
}else{q.header.addClass("bcus-card-explorer__header--hidden")
}},m=function(O){var N=O.target.className;
if(N.indexOf("list-item-inner")>-1){return O.target.parentNode
}else{if(N.indexOf("list-icon")>-1||N.indexOf("list-label")>-1){return O.target.parentNode.parentNode
}else{return O.target
}}},B=function(O){var P=$('[data-filter="'+O+'"]'),R=P.find("[data-filter-label]"),Q=R.text();
if(!Q){var N=O.lastIndexOf("/");
if(N>-1){Q=O.substring(N+1)
}else{Q=O
}}return Q
},t=function(){var O=c.isMobile?"mobile":"desktop",P=["receive","spend","perks"],Q=0,N="",R;
for(;
Q<P.length;
Q++){R=P[Q];
if(c.appliedFilters.tags[R]&&c.appliedFilters.tags[R].length>0){N+=u(B(c.appliedFilters.tags[R][0]));
if(N.toLowerCase().indexOf("cash")===-1){N+=" "+c.options.filterSuffixes[R]
}N+=c.options[O].resultsDelineator
}}if(N.length>0){N=N.substring(0,N.length-c.options[O].resultsDelineator.length)
}return N
},u=function(O){var N;
if(O){N=a(O).charAt(0).toUpperCase()+O.slice(1);
return N.replace(/-+$|(-)+/g," ")
}},a=function(N){if(N){return N.replace(/^\s+|\s+$/g,"")
}return N
},f=function(){var N=window.innerWidth||document.documentElement.clientWidth;
return N<c.options.mobileBreakpoint
},L=function(O){var N={tags:{receive:[],spend:[],perks:[]}};
N.tags.receive=O.tags.receive.slice();
N.tags.spend=O.tags.spend.slice();
N.tags.perks=O.tags.perks.slice();
return N
},k=function(N){if(N){e.push(N)
}};
return{init:I,addCategoryIconClickCallback:k}
})();
var BCUS=BCUS||{};
BCUS.CardExplorerAnalytics=(function(){var b=null,d=function(e){b=e;
c()
},c=function(){if(b){b.addCategoryIconClickCallback(a)
}},a=function(k,f,g,j){var h={bcusCardExplorerValues:"Reward:"+k+"|Spend:"+f+"|"+g};
if(BCUS.DataStoreManager){BCUS.DataStoreManager.storeData("card-explorer",JSON.stringify(h))
}};
return{init:d}
})();
var BCUS=BCUS||{};
BCUS.CompareCart=(function(g){var n={cardArray:[],headerHeight:68,compareCartHeight:60,hasAriaText:false,ariaTextObj:{},cardCpcArray:[]},d={},v={options:{},compareCards:[],compareCardsCount:0,compareCartFull:false,cartNavVisible:false,currentCompareClasses:{compareClass:"bcus-card-results__grid-compare",compareImgClass:"bcus-card-results__grid-card-image"}},m=function(E){if(E){n.ariaTextObj.selectText=E.ariaSelect;
n.ariaTextObj.removeText=E.ariaRemove;
n.ariaTextObj.jumpText=E.ariaJump;
n.ariaTextObj.addText=E.ariaAdd;
n.hasAriaText=true
}v.options=_.extend({},n);
if(BCUS.CardResults){BCUS.CardResults.addStateUpdatedListener(B)
}l()
},o=function(){d.compareList=g(".bcus-compare__compare-cart-list");
d.compareBar=g(".bcus-compare__compare-cart");
d.compareButton=g(".bcus-compare__compare-cart-button");
d.mainNavBar=g(".global-header");
d.compareAccessText=g(".bcus-compare__compare-accessibility-text");
d.cardExplorer=g(".card-explorer");
d.body=g("body");
d.window=g(window)
},p=function(){if(v.compareCardsCount===0){d.compareBar.addClass("bcus-compare__compare-cart--hidden");
v.cartNavVisible=false;
d.compareBar.removeClass("bcus-compare__compare-cart--fixed").addClass("bcus-compare__compare-cart--relative")
}},k=function(E){if(v.compareCardsCount){if(d.window.scrollTop()>v.options.headerHeight){q()
}var H=E.getAttribute("data-card-name"),F=g('.bcus-card-results__item[data-card-name="'+H+'"] .'+v.currentCompareClasses.compareImgClass).attr("src"),G;
G=z(H,F);
if(!h(E,v.currentCompareClasses.compareClass+"--selected")){f(E);
d.compareBar.removeClass("bcus-compare__compare-cart--hidden");
v.cartNavVisible=true;
u(G,H,E)
}else{y(E)
}}},t=function(F,E){F.setAttribute("aria-label",E);
F.setAttribute("role","alert")
},s=function(E){var F=document.createElement("span");
F.setAttribute("class","compare-item-accessibility-link");
F.setAttribute("aria-label",(v.options.hasAriaText&&v.options.ariaTextObj.jumpText!=="")?v.options.ariaTextObj.jumpText:"Jump to compare tray.");
F.setAttribute("tabindex",0);
E.parentNode.appendChild(F);
g(F).on("keypress",function(G){if(G.which===13||G.keyCode===13){var H=E.getAttribute("data-card-name");
g('.bcus-compare__compare-cart-list-item[data-card-name="'+H+'"').focus();
return false
}})
},D=function(E){if(w(E)!==null&&w(E).className==="compare-item-accessibility-link"){g(w(E)).remove()
}},f=function(F){var E=(v.options.hasAriaText&&v.options.ariaTextObj.addText!=="")?v.options.ariaTextObj.addText:"Card added to compare tray.";
F.className=F.className+" "+v.currentCompareClasses.compareClass+"--selected";
F.innerHTML="Added";
t(F,E);
s(F);
if(v.compareCardsCount>1){d.compareButton.removeClass("bcus-button--white").addClass("bcus-button--blue").removeClass("bcus-compare__compare-cart-button--disabled");
BCUS.DataStoreManager.storeData("compare","compare")
}},y=function(F){var E=(v.options.hasAriaText&&v.options.ariaTextObj.selectText!=="")?v.options.ariaTextObj.selectText:"Card removed from compare tray.",G;
F.className=F.className.replace(new RegExp("(^|\\b)"+v.currentCompareClasses.compareClass+"--selected".split(" ").join("|")+"(\\b|$)","gi")," ");
F.innerHTML="Compare";
G=F.getAttribute("data-card-name");
D(F);
r(G);
t(F,E);
if(v.compareCardsCount<=1){d.compareButton.removeClass("bcus-button--blue").addClass("bcus-button--white").addClass("bcus-compare__compare-cart-button--disabled")
}setTimeout(function(){t(F,"Add card to compare tray")
},1000)
},r=function(F){var E=g('.bcus-compare__compare-cart-list-item[data-card-name="'+F+'"]');
E.empty();
a(E);
E.removeAttr("data-card-name");
E.attr("aria-label","Empty slot.");
E.addClass("bcus-compare__compare-cart-list-item--placeholder")
},z=function(I,E){var H=g(".bcus-compare__compare-cart-list-item--placeholder").first(),F=document.createElement("img"),G=document.createElement("div");
G.className="bcus-compare__compare-cart-close-icon";
G.setAttribute("aria-label",(v.options.hasAriaText&&v.options.ariaTextObj.removeText!=="")?v.options.ariaTextObj.removeText:"Remove card from compare tray.");
G.setAttribute("tabindex",0);
F.setAttribute("alt",I);
F.setAttribute("src",E);
F.style.width=100+"%";
F.style.height=100+"%";
H.append(F);
H.attr("data-card-name",I);
H.attr("aria-label",I);
H.append(G);
g(H).removeClass("bcus-compare__compare-cart-list-item--placeholder");
H.attr("tabindex",0);
return H
},u=function(F,G,E){g(F).unbind("click keypress");
g(F).on("click keypress",function(I){I.preventDefault();
var H;
y(E);
g("span."+v.currentCompareClasses.compareClass+'-container[data-card-name="'+G+'"]').trigger("click");
if(v.compareCardsCount<3&&g("."+v.currentCompareClasses.compareClass+"-container").hasClass("bcus-card-results__list-compare-container-inactive")){g("."+v.currentCompareClasses.compareClass+"-container").removeClass("bcus-card-results__list-compare-container-inactive")
}H=v.compareCardsCount===0?E:g(".bcus-compare__compare-cart-list-item").not(".bcus-compare__compare-cart-list-item--placeholder")[0];
H.focus();
q()
})
},C=function(){d.window.scroll(function(F){var E=d.compareBar;
if(v.cartNavVisible){d.body.addClass("bcus-compare__compare-cart-content");
if(g(this).scrollTop()>v.options.headerHeight&&E.css("position")!=="fixed"){d.cardExplorer.addClass("bcus-card-explorer__explorer-container--scrolled");
d.compareBar.removeClass("bcus-compare__compare-cart--relative").addClass("bcus-compare__compare-cart--fixed")
}else{if(g(this).scrollTop()<v.options.compareCartHeight&&E.css("position")==="fixed"){d.cardExplorer.removeClass("bcus-card-explorer__explorer-container--scrolled");
d.compareBar.removeClass("bcus-compare__compare-cart--fixed").addClass("bcus-compare__compare-cart--relative")
}}}else{d.body.removeClass("bcus-compare__compare-cart-content");
d.cardExplorer.removeClass("bcus-card-explorer__explorer-container--scrolled");
d.compareBar.removeClass("bcus-compare__compare-cart--fixed").addClass("bcus-compare__compare-cart--relative")
}})
},q=function(){if(d.window.scrollTop()>v.options.headerHeight&&d.compareBar.css("position")!=="fixed"){d.body.addClass("bcus-compare__compare-cart-content");
d.cardExplorer.addClass("bcus-card-explorer__explorer-container--scrolled");
d.compareBar.removeClass("bcus-compare__compare-cart--relative").addClass("bcus-compare__compare-cart--fixed")
}},a=function(E){g(E).appendTo(d.compareList)
},A=function(){t(v.compareCartFull[0],"Compare tray is full. Remove card first");
if(g(".bcus-popover__notification").length>=1){g(".bcus-popover__notification").addClass("bcus-popover__notification-shake")
}},c=function(){var F=g("."+v.currentCompareClasses.compareClass+"--selected");
for(var E=0;
E<F.length;
E++){y(F[E])
}},j=function(){c();
for(var E=0;
E<v.compareCards.length;
E++){r(v.compareCards[E]);
k(g("span."+v.currentCompareClasses.compareClass+'-container[data-card-name="'+v.compareCards[E]+'"]')[0])
}},x=function(E){v=_.extend({},v,E);
l()
},B=function(F){var E=!e(v.compareCards,F.compareCards)||v.currentCompareClasses.compareClass!==F.currentCompareClasses.compareClass||F.compareCartFull;
if(E){x({compareCardsCount:F.compareCards.length,compareCards:F.compareCards.slice(0),currentCompareClasses:_.extend({},F.currentCompareClasses),compareCartFull:F.compareCartFull})
}},l=function(){o();
C();
j();
p();
if(v.compareCartFull){A()
}},h=function(F,E){var G=new RegExp("\\b"+E+"\\b");
return G.test(F.className)
},w=function(E){if(E.nextElementSibling){return E.nextElementSibling
}do{E=E.nextSibling
}while(E&&E.nodeType!==1);
return E
},b=function(E){for(var F in E){if(E.hasOwnProperty(F)){if(E[F]!==""){return false
}}}return true
},e=function(F,E){if(F.length!==E.length){return false
}for(var G=0;
G<F.length;
G++){if(F[G]!==E[G]){return false
}}return true
};
return{init:m}
})($);
var BCUS=BCUS||{};
BCUS.CompareView=(function(){var r={},X={defaultNullState:"",filteredCardList:[],storedCardList:{}},a={mobileEventsEnabled:false,currentIndex:1,carouselDistance:0,currentTableWidth:null,currentFixedWidth:null,currentWindowWidth:null},Y=[],U=function(aa){Y=aa.categories||[];
X.defaultNullState=aa.noContentText[0]||"";
C();
r.compareButton.on("click",G)
},C=function(){r.compareView=$(".bcus-compare__compare-view");
r.compareViewContent=$(".bcus-compare__compare-view-inner");
r.tableContainer=$(".bcus-compare__table-container");
r.table=$(".bcus-compare__table");
r.tableBody=$("#bcus-compare__table-body");
r.topBar=$("#bcus-compare__top-bar");
r.topBarContent=$(".bcus-compare__top-bar-inner");
r.sideBar=$("#bcus-compare__side-bar");
r.sideHeadings=r.sideBar.children();
r.compareButton=$(".bcus-compare__compare-cart-button");
r.closeButton=$(".bcus-compare__close");
r.leftArrow=$(".bcus-compare__compare-arrow--left");
r.rightArrow=$(".bcus-compare__compare-arrow--right");
r.errorCtaButton=$(".bcus-compare__error-cta");
r.body=$("body");
r.scrollBody=$("html, body");
r.window=$(window)
},e=function(){r.closeButton.on("click",F);
r.closeButton.on("blur",K);
r.compareView.on("scroll",R);
r.window.on("resize",BCUS.Utils.resize(h,150));
r.window.on("orientationchange",h)
},z=function(){r.closeButton.off("click",F);
r.closeButton.off("blur",K);
r.compareView.off("scroll",R);
r.window.off("resize",BCUS.Utils.resize(h,150));
r.window.off("orientationchange")
},u=function(){if(!a.mobileEventsEnabled){w();
r.carousel.on("pan",m);
r.carousel.on("panend",V)
}},w=function(){if(!a.mobileEventsEnabled){r.leftArrow.on("click",N);
r.rightArrow.on("click",N);
a.mobileEventsEnabled=true
}},k=function(){if(!!a.mobileEventsEnabled){r.leftArrow.off("click",N);
r.rightArrow.off("click",N);
if(r.carousel){r.carousel.off("pan");
r.carousel.off("panend")
}a.mobileEventsEnabled=false
}},G=function(aa){var ab=t();
if(aa){aa.preventDefault()
}e();
a.currentWindowWidth=x();
a.carouselDistance=0;
r.compareView.addClass("bcus-compare__compare-view--loading");
r.compareView.removeClass("bcus-compare__compare-view--hidden");
A(true);
$.when.apply(undefined,ab).then(H,f);
BCUS.Analytics.recordEvent("comparebuttonclick","","","compareClick","o")
},H=function(){b();
L();
q()
},f=function(){r.compareView.addClass("bcus-compare__compare-view--error");
r.compareView.removeClass("bcus-compare__compare-view--loading");
r.errorCtaButton.on("click",c)
},c=function(aa){aa.preventDefault();
r.errorCtaButton.off("click");
G()
},t=function(){var ad=o(),ac=[],aa=0,ab;
X.filteredCardList=B(ad);
for(;
aa<X.filteredCardList.length;
aa++){ab=X.filteredCardList[aa];
if(!X.storedCardList[ab]){ac.push(y(ab))
}}return ac
},b=function(){l();
p();
v();
g()
},l=function(){var af=r.tableBody.find(".bcus-compare__table-row-cards"),aj=document.createDocumentFragment(),ad=0,ab,aa,ag,ah,ac,ai,ae;
for(;
ad<X.filteredCardList.length;
ad++){ag=X.storedCardList[X.filteredCardList[ad]].baseInfo;
ai=ag.htmlAttributeData.cardNamePart1;
ae=ag.cardNamePart1;
if(ag.htmlAttributeData.cardNamePart2){ai+=" "+ag.htmlAttributeData.cardNamePart2
}if(ag.cardNamePart2){ae+=" "+ag.cardNamePart2
}ab=document.createElement("td");
ab.className="bcus-compare__table-cell bcus-compare__table-cell-card";
ab.setAttribute("tabindex",0);
aa=document.createElement("a");
aa.className="bcus-compare__table-card-link";
aa.setAttribute("href","../../.."+BCUS.Utils.browseCardUrl()+"/"+X.filteredCardList[ad]+".html");
aa.setAttribute("alt",ai+" card");
ah=document.createElement("img");
ah.className="bcus-compare__table-card-image";
ah.setAttribute("src","../../.."+ag.cardImageFront);
ah.setAttribute("alt","Image of the "+ai+" card");
ac=document.createElement("h2");
ac.className="bcus-compare__table-card-name";
ac.innerHTML=ae;
aa.appendChild(ah);
aa.appendChild(ac);
ab.appendChild(aa);
aj.appendChild(ab)
}af.append(aj)
},p=function(){var ac=r.tableBody.find(".bcus-compare__table-row--comparable"),aa=0,ab;
for(;
aa<ac.length;
aa++){ab=I(Y[aa]);
ac[aa].appendChild(ab)
}},I=function(ab){var ag=0,ak=document.createDocumentFragment(),ac=ab,aa=ab,ai,aj,af,ae,ah,ad;
for(;
ag<X.filteredCardList.length;
ag++){ae=X.storedCardList[X.filteredCardList[ag]].compareInfo.cardCompareScreenCategories;
ah=X.storedCardList[X.filteredCardList[ag]].baseInfo;
ad=ah.htmlAttributeData.cardNamePart1;
if(ah.htmlAttributeData.cardNamePart2){ad+=" "+ah.htmlAttributeData.cardNamePart2
}af=document.createElement("td");
af.className="bcus-compare__table-cell";
af.setAttribute("tabindex","0");
ai=document.createElement("span");
ai.setAttribute("aria-label",ad+": "+aa);
af.appendChild(ai);
if(!ae){ae=X.defaultNullState
}if(!ae||(typeof ae==="string")){aj=document.createElement("p");
aj.className="bcus-compare__table-cell-text";
aj.innerHTML=ae;
af.appendChild(aj)
}else{ae=D(ae,ad,aa);
af.appendChild(ae)
}ak.appendChild(af)
}return ak
},v=function(){var ab=r.tableBody.find(".bcus-compare__table-row-cta"),ae=ab.find(".bcus-compare__table-cell-cta"),aa=document.createDocumentFragment(),ac=1,ad;
ae[0].children[0].setAttribute("href","../../.."+BCUS.Utils.browseCardUrl()+"/"+X.filteredCardList[0]+".html");
ae[0].children[0].setAttribute("alt",X.filteredCardList[0]);
ae[0].children[1].innerHTML=X.storedCardList[X.filteredCardList[0]].compareInfo.compareFootnote;
for(;
ac<X.filteredCardList.length;
ac++){ad=ae[0].cloneNode(true);
ad.children[0].setAttribute("href","../../.."+BCUS.Utils.browseCardUrl()+"/"+X.filteredCardList[ac]+".html");
ad.children[0].setAttribute("alt",X.filteredCardList[ac]);
ad.children[1].innerHTML=X.storedCardList[X.filteredCardList[ac]].compareInfo.compareFootnote;
aa.appendChild(ad)
}ab.append(aa)
},g=function(){var ac=r.topBarContent.find(".bcus-compare__top-bar-card-container")[0],aa=document.createDocumentFragment(),ae=1,ab=X.storedCardList[X.filteredCardList[0]].baseInfo,ad;
ac=J(ac,ab);
for(;
ae<X.filteredCardList.length;
ae++){ab=X.storedCardList[X.filteredCardList[ae]].baseInfo;
ad=ac.cloneNode(true);
ad=J(ad,ab);
aa.appendChild(ad)
}r.topBarContent.append(aa)
},J=function(ab,aa){var ac=aa.htmlAttributeData.cardNamePart1;
if(aa.htmlAttributeData.cardNamePart2){ac+=" "+aa.htmlAttributeData.cardNamePart2
}ab.children[0].setAttribute("src",BCUS.Utils.getMode()+aa.cardImageFront);
ab.children[0].setAttribute("alt","Image of the "+ac);
ab.children[1].children[0].innerHTML=aa.cardNamePart1;
if(aa.cardNamePart2){ab.children[1].children[1].innerHTML=aa.cardNamePart2
}return ab
},T=function(){var ab=0,ac=$(".bcus-compare__table-row-cards"),ad,ae,aa,af;
r.sideHeadings[0].style.marginTop=(ac[0].offsetHeight+"px");
for(;
ab<r.sideHeadings.length;
ab++){ad=r.sideHeadings[ab].getAttribute("data-category");
if(r[ad+"row"]&&r[ad+"row"].length>0){ae=r[ad+"row"]
}else{ae=r[ad+"row"]=document.getElementById("row-"+ad)
}af=Z(r.sideHeadings[ab]);
aa=ae.offsetHeight-(af*2);
$(r.sideHeadings[ab]).height(aa)
}},Z=function(aa){var ab;
if(aa){aa=$(aa);
ab=parseInt(aa.css("padding-top"),10);
return ab
}},x=function(){return window.innerWidth||document.documentElement.clientWidth
},L=function(){var aa=x();
if(r.body.hasClass("isTouch")||aa<960){if(r.scrollBody.hasClass("no-csstransforms")){w();
d();
s(a.currentIndex);
return
}if(!r.carousel){BCUS.Utils.loadFile("js",BCUS.Utils.getMode()+"/etc/designs/bcuspublic/default/barclays-core/js/libs/hammer.min.js",Q)
}else{if(r.carousel){u()
}}d()
}else{j(false,false)
}},Q=function(){r.carousel=new Hammer.Manager(r.tableContainer[0],{recognizers:[[Hammer.Pan,{direction:Hammer.DIRECTION_HORIZONTAL}]],domEvents:true,threshold:10});
u()
},h=function(){var aa=x();
M();
T();
if(a.currentWindowWidth<720&&aa>=720){if(a.currentIndex===X.filteredCardList.length){a.currentIndex=X.filteredCardList.length-1
}}if(a.currentWindowWidth>=720&&a.currentWindowWidth<980){if(a.currentIndex===X.filteredCardList.length){a.currentIndex=X.filteredCardList.length-1
}}if(a.currentWindowWidth>=980&&aa<980){L();
a.currentIndex=1
}if(aa>=980){a.currentIndex=1
}s(a.currentIndex);
a.currentWindowWidth=aa;
d()
},d=function(){var aa=x();
if(aa<960){if(aa>=720&&X.filteredCardList.length===2){j(false,false)
}else{if(a.currentIndex===1){j(false,true)
}else{if(aa<720){if(a.currentIndex===X.filteredCardList.length){j(true,false)
}else{j(true,true)
}}else{j(true,false)
}}}}else{j(false,false)
}},j=function(ac,aa){var ab="bcus-compare__compare-arrow--hidden";
if(!ac){BCUS.Utils.addClass(r.leftArrow[0],ab)
}else{BCUS.Utils.removeClass(r.leftArrow[0],ab)
}if(!aa){BCUS.Utils.addClass(r.rightArrow[0],ab)
}else{BCUS.Utils.removeClass(r.rightArrow[0],ab)
}},m=function(ab){var ac=a.carouselDistance+(ab.deltaX*1.2),aa=setTimeout(function(){r.table.css({transform:"translate("+ac+"px, 0)"})
},150);
ab.preventDefault();
clearTimeout(aa)
},V=function(ae){var ac=ae.deltaX,ab=0,af=a.currentIndex,aa=Math.abs(ac),ad=O();
if(aa>(ad/2)){if(ac<1){if(!r.rightArrow.hasClass("bcus-compare__compare-arrow--hidden")){af=a.currentIndex+1;
ab=ad*-1
}}else{if(!r.leftArrow.hasClass("bcus-compare__compare-arrow--hidden")){af=a.currentIndex-1;
ab=ad
}}}s(af);
a.carouselDistance=a.carouselDistance+ab;
d()
},N=function(ab){var aa=$(ab.target);
if(aa.hasClass("bcus-compare__compare-arrow--right")){s(a.currentIndex+1)
}else{s(a.currentIndex-1)
}d()
},s=function(ab){var ac=ab||1,ad=x(),af=ad*(-1*(ac-1)),aa=O(),ae=[(ac-1)*aa]*-1;
if(ad>=720){af=(aa*(ac-1))*-1
}if(r.scrollBody.hasClass("no-csstransforms")){r.table.animate({marginLeft:parseInt(ae,10)+parseInt(a.currentFixedWidth,10)+"px"},500);
r.topBarContent.animate({marginLeft:af+"px"},500)
}else{r.table.css({transform:"translateX("+ae+"px)"});
r.topBarContent.css({transform:"translateX("+af+"px)"})
}a.currentIndex=ac
},O=function(){return(a.currentTableWidth/X.filteredCardList.length)
},R=function(){if(!a.sticky){if(r.compareView.scrollTop()>230){a.sticky=true;
r.topBar.addClass("bcus-compare__top-bar--sticky");
r.topBar.removeClass("bcus-compare__top-bar--hidden")
}}else{if(r.compareView.scrollTop()<230){a.sticky=false;
r.topBar.removeClass("bcus-compare__top-bar--sticky");
r.topBar.addClass("bcus-compare__top-bar--hidden")
}}},D=function(ag,ah,af){var ac=0,ae,ad;
ae=document.createElement("ul");
ae.className="bcus-compare__table-cell-list";
for(var ac=0;
ac<ag.length;
ac++){var aa=ag[ac].categoryName.replace(/[\s]/g,"-").toLowerCase();
if(af==aa&&ag[ac].cardCompareDetailsItems){if(typeof ag[ac].cardCompareDetailsItems!=="string"){for(var ab=0;
ab<ag[ac].cardCompareDetailsItems.length;
ab++){if(ag[ac].cardCompareDetailsItems[ab]){ad=document.createElement("li");
ad.className="bcus-compare__table-cell-list-item";
ad.innerHTML=ag[ac].cardCompareDetailsItems[ab];
ae.appendChild(ad)
}}}else{ad=document.createElement("li");
ad.className="bcus-compare__table-cell-list-item";
ad.innerHTML=ag[ac].cardCompareDetailsItems;
ae.appendChild(ad)
}}}return ae
},o=function(){if(BCUS.DataStoreManager.getData("compare-data")){return BCUS.DataStoreManager.getData("compare-data").split(",")
}},F=function(aa){S()
},K=function(aa){if(r.body.hasClass("bcus-body__compare-view--visible")){r.table.focus()
}},y=function(ab){var aa=ab+"/_jcr_content.carddetails.json";
aa=encodeURI(BCUS.Utils.getHostName()+BCUS.Utils.getCurrentPage()+"/"+aa);
return $.ajax({url:aa,type:"get"}).done(function(ac){X.storedCardList[ab]={baseInfo:ac.corecard||{},compareInfo:ac.card_compare||{},cardName:ab}
})
},B=function(ae){var ad=new RegExp("[^-(\\w)]","g"),aa=[],ac=0,ab;
for(;
ac<ae.length;
ac++){ab=ae[ac].replace(ad,"");
aa.push(ae[ac])
}return aa
},q=function(){var ab=0,ae=document.querySelectorAll(".bcus-compare__compare-view-list-item")[0],ad=X.filteredCardList.length,aa=x(),ac;
r.table.focus();
r.compareView.removeClass("bcus-compare__compare-view--loading bcus-compare__compare-view--error");
if(ad<3){r.compareView.addClass("bcus-compare__compare-view--two-col")
}else{r.compareView.removeClass("bcus-compare__compare-view--two-col")
}M();
T();
BCUS.Analytics.recordPageView("","en","cards","compare","","")
},M=function(){var ac=window.innerWidth||document.documentElement.clientWidth,ag=a.currentFixedWidth=r.sideBar[0].offsetWidth,ab=ac-ag,ah=(ab*X.filteredCardList.length),ai=ac,aa=r.compareViewContent.offset().left,ae=null,af,ad;
if(ac>=1000){r.table.removeAttr("style");
a.currentTableWidth=910;
af=(ac-r.tableContainer.width())/2;
if(aa<af){ae=(af-aa)*2
}ad=ab-(af*2);
W(ad,ae);
return
}else{if(ac>=960){r.table.removeAttr("style");
W(ab);
ah=ab
}else{if(ac>=720){ah=ab*(X.filteredCardList.length/2)
}else{r.table[0].setAttribute("style","")
}}}if(ac<720){W(ac*X.filteredCardList.length)
}else{W(ah)
}a.currentTableWidth=ah;
r.table.css({width:ah+"px",maxWidth:ah+"px"})
},W=function(aa,ab){if(aa){if(!!ab){ab=a.currentFixedWidth-ab;
r.topBar.css({width:aa+"px",left:ab+"px"})
}else{r.topBar.removeAttr("style").css({width:aa+"px"})
}r.topBarContent.css({width:aa+"px"})
}},S=function(){var ad=document.querySelectorAll(".bcus-compare__compare-view-list-item"),aa=r.topBar.find(".bcus-compare__compare-controls"),ac,ab=0;
z();
k();
A(false);
r.compareView.addClass("bcus-compare__compare-view--hidden");
n()
},n=function(){var ab=r.tableBody.find(".bcus-compare__table-row--comparable"),aa=0;
E(r.tableBody.find(".bcus-compare__table-row-cards")[0],0);
E(r.tableBody.find(".bcus-compare__table-row-cta")[0],1);
for(;
aa<ab.length;
aa++){E(ab[aa],0)
}r.table[0].setAttribute("style","");
r.topBar.addClass("bcus-compare__top-bar--hidden");
r.topBar.removeClass("bcus-compare__top-bar--sticky");
r.topBarContent[0].setAttribute("style","");
E(r.topBarContent[0],1);
j(false,false);
a.currentIndex=1
},E=function(ad,ac){var aa=ad.children,ab=aa.length-1;
ac=ac||0;
for(;
ab>=ac;
ab--){if(aa[ab].parentNode){aa[ab].parentNode.removeChild(aa[ab])
}}},A=function(ab){var aa;
if(!ab){aa=document.querySelectorAll(".bcus-compare__body-overlay")[0];
if(aa.parentNode){aa.parentNode.removeChild(aa)
}r.body.removeClass("bcus-body__compare-view--visible");
r.body.off("click",P)
}else{aa=document.querySelectorAll(".bcus-compare__body-overlay");
if(aa.length>0){return
}aa=document.createElement("div");
aa.className="bcus-compare__body-overlay";
r.body[0].appendChild(aa);
r.body.addClass("bcus-body__compare-view--visible");
r.body.on("click",P)
}},P=function(ab){var aa=$(ab.target);
if(aa.hasClass("bcus-compare__compare-view")||aa.hasClass("bcus-compare__compare-view-results-container")){S()
}};
return{init:U}
})();
var BCUS=BCUS||{};
BCUS.BrowseCardFilter=(function(){var r={resultsDefault:"Showing all cards",mobile:{resultsDelineator:", ",results:{partA:"",partB:" of ",partC:""},filterDefault:"Filter Cards"},desktop:{resultsDelineator:" | ",results:{partA:"Showing ",partB:" of ",partC:" for:"},filterDefault:""},mobileBreakpoint:768,twoColumn:{start:924,end:1240}},d={},F={options:{},isMobile:false,mobileNavActive:false,mobileNavRightCtaEnabled:false,displayableCardCount:0,filteredCardCount:0,displayedCardCount:0,appliedFilters:{tags:{parentBrowseFilters:[]}},tempFilters:{tags:{parentBrowseFilters:[]}}},A=[],p=function(K){if(K){var L=_.extend({},r,K);
L.mobile=_.extend({},r.mobile,K.mobile||{});
L.desktop=_.extend({},r.desktop,K.desktop||{});
L.twoColumn=_.extend({},r.twoColumn,K.twoColumn||{});
if(L.disabled!=="true"){s();
t();
if(BCUS.CardResults){BCUS.CardResults.addStateUpdatedListener(J)
}F.options=L;
if(D()){F.isMobile=true
}m()
}}},s=function(){d.categoryIcons=$(".bcus-card-explorer__tab-category-list-item");
d.resultsContainer=$(".bcus-card-explorer__results");
d.resultsText=$(".bcus-card-explorer__results-copy");
d.resultsFilters=$(".bcus-card-explorer__results-filters");
d.resultsClear=$(".bcus-card-explorer__results-clear-link");
d.header=$(".bcus-card-explorer__header");
d.mobileNav=$(".bcus-card-explorer__mobile-nav");
d.mobileNavLeftCta=$(".bcus-card-explorer__mobile-nav-left-cta");
d.mobileNavRightCta=$(".bcus-card-explorer__mobile-nav-right-cta");
d.body=$("body");
d.scrollBody=$("html, body");
d.window=$(window)
},t=function(){d.categoryIcons.on("click",q);
d.resultsClear.on("click",u);
d.resultsClear.on("keypress",x);
d.window.on("resize",l(B,150));
d.resultsFilters.on("click",y);
d.mobileNavLeftCta.on("click",n);
d.mobileNavRightCta.on("click",g)
},q=function(O){var K=z(O),Q=$(K),L=Q.data("filter");
if(L){if(!F.isMobile){var N=c(F.appliedFilters);
if(N.tags.parentBrowseFilters&&N.tags.parentBrowseFilters[0]===L){N.tags.parentBrowseFilters=[]
}else{N.tags.parentBrowseFilters=[L]
}if(BCUS.CardResults){BCUS.CardResults.setFilterState(N)
}if(O.keyCode!==13){K.blur()
}}else{var P={tempFilters:c(F.tempFilters)};
if(P.tempFilters.tags.parentBrowseFilters&&P.tempFilters.tags.parentBrowseFilters[0]===L){P.tempFilters.tags.parentBrowseFilters=[]
}else{P.tempFilters.tags.parentBrowseFilters=[L]
}H(P)
}var M=F.appliedFilters.tags.parentBrowseFilters[0]?E(F.appliedFilters.tags.parentBrowseFilters[0]):"";
for(;
i<A.length;
i++){A[i](M,O)
}}},u=function(){if(BCUS.CardResults){BCUS.CardResults.setFilterState({tags:{parentBrowseFilters:[]}})
}},x=function(K){if(K.keyCode===13){if(BCUS.CardResults){BCUS.CardResults.setFilterState({tags:{parentBrowseFilters:[]}})
}}},l=function(M,L){var K;
return function(){var P=this,O=arguments,N=function(){K=null;
if(M){M.apply(P,O)
}};
clearTimeout(K);
K=setTimeout(N,L)
}
},B=function(){H({isMobile:D()})
},y=function(){if(!F.isMobile){return
}H({tempFilters:c(F.appliedFilters),mobileNavActive:true})
},n=function(){if(!F.isMobile){return
}H({mobileNavActive:false,tempFilters:{tags:{parentBrowseFilters:[]}}});
d.scrollBody.animate({scrollTop:0},500)
},g=function(){if(F.isMobile){if(!_.isEqual(F.tempFilters.tags.parentBrowseFilters,F.appliedFilters.tags.parentBrowseFilters)){if(BCUS.CardResults){BCUS.CardResults.setFilterState(c(F.tempFilters))
}H({mobileNavActive:false,tempFilters:{tags:{parentBrowseFilters:[]}}});
d.scrollBody.animate({scrollTop:0},500)
}}},H=function(K){F=_.extend({},F,K);
m()
},J=function(L){var K=L.displayableCardCount!==F.displayableCardCount||L.filteredCardCount!==F.filteredCardCount||L.displayedCardCount!==F.displayedCardCount||!_.isEqual(L.appliedFilters.tags.parentBrowseFilters,F.appliedFilters.tags.parentBrowseFilters);
if(K){H({displayableCardCount:L.displayableCardCount,filteredCardCount:L.filteredCardCount,displayedCardCount:L.displayedCardCount,appliedFilters:c(L.appliedFilters)})
}},m=function(){j();
f();
I();
w();
a();
C();
G();
v();
h()
},j=function(){var L=F.isMobile?"mobile":"desktop",K;
if(_.isEmpty(F.appliedFilters.tags.parentBrowseFilters)){K=F.options[L].filterDefault;
d.resultsContainer.removeClass("bcus-card-explorer__results--filtered")
}else{K=b();
d.resultsContainer.addClass("bcus-card-explorer__results--filtered")
}d.resultsFilters.text(K)
},f=function(){if(_.isEmpty(F.appliedFilters.tags.parentBrowseFilters)){d.resultsClear.addClass("bcus-card-explorer__results-clear-link--hidden")
}else{d.resultsClear.removeClass("bcus-card-explorer__results-clear-link--hidden")
}},I=function(){var M=F.isMobile?"mobile":"desktop",O=F.options[M].results.partA,L=F.options[M].results.partB,N=F.options[M].results.partC,K="";
if(F.displayedCardCount===F.displayableCardCount){O=F.options.resultsDefault
}else{if(F.displayedCardCount===F.filteredCardCount){if(F.filteredCardCount>1){K="s"
}O+="<strong>"+F.filteredCardCount+"</strong> result"+K
}else{if(F.displayedCardCount<F.filteredCardCount){if(F.displayableCardCount>1){K="s"
}O+="<strong>"+F.displayedCardCount+"</strong>"+L+"<strong>"+F.filteredCardCount+"</strong> result"+K
}}}if(!_.isEmpty(F.appliedFilters.tags.parentBrowseFilters)){O+=N
}d.resultsText.html(O)
},h=function(){if(F.isMobile){var M=46,L=(d.resultsFilters[0].offsetWidth-M)/7,K=b()||F.options.mobile.filterDefault;
if(o(K).length>L){K=K.substring(0,L)+"..."
}d.resultsFilters[0].innerText=K
}},w=function(){var L=d.resultsFilters[0].innerText,M=d.resultsText[0].innerText,K="Filtered by "+L;
if(L==="Filter Cards"){K="No filters";
L="with no filters"
}d.resultsContainer[0].setAttribute("aria-label",K);
d.resultsText[0].setAttribute("aria-label",M+" "+L)
},a=function(){if(F.mobileNavActive===true){d.body.addClass("bcus-card-explorer__mobile-filters--visible")
}else{d.body.removeClass("bcus-card-explorer__mobile-filters--visible")
}},C=function(){if(_.isEqual(F.tempFilters.tags.parentBrowseFilters,F.appliedFilters.tags.parentBrowseFilters)){d.mobileNavRightCta.removeClass("bcus-button bcus-button--blue bcus-card-explorer__mobile-nav-right-cta--enabled")
}else{d.mobileNavRightCta.addClass("bcus-button bcus-button--blue bcus-card-explorer__mobile-nav-right-cta--enabled")
}},G=function(){var M=F.appliedFilters.tags.parentBrowseFilters?F.appliedFilters.tags.parentBrowseFilters:[],L=F.tempFilters.tags.parentBrowseFilters?F.tempFilters.tags.parentBrowseFilters:[],K=$(".bcus-card-explorer__tab-category-list-item");
K.each(function(){var O=$(this),N=O.data("filter");
if(_.contains(M,N)){O.addClass("bcus-card-explorer__tab-category-list-item--selected")
}else{O.removeClass("bcus-card-explorer__tab-category-list-item--selected")
}if(_.contains(L,N)){O.addClass("bcus-card-explorer__tab-category-list-item--temp")
}else{O.removeClass("bcus-card-explorer__tab-category-list-item--temp")
}})
},v=function(){if(_.isEmpty(F.appliedFilters.tags.parentBrowseFilters)){d.header.removeClass("bcus-card-explorer__header--hidden")
}else{d.header.addClass("bcus-card-explorer__header--hidden")
}},z=function(L){var K=L.target.className;
if(K.indexOf("list-item-inner")>-1){return L.target.parentNode
}else{if(K.indexOf("list-icon")>-1||K.indexOf("list-label")>-1){return L.target.parentNode.parentNode
}else{return L.target
}}},E=function(L){var M=$('[data-filter="'+L+'"]'),O=M.find("[data-filter-label]"),N=O.text();
if(!N){var K=L.lastIndexOf("/");
if(K>-1){N=L.substring(K+1)
}else{N=L
}}return N
},b=function(){var L=F.isMobile?"mobile":"desktop",M=0,K="",N;
if(F.appliedFilters.tags.parentBrowseFilters&&F.appliedFilters.tags.parentBrowseFilters.length>0){K+=k(E(F.appliedFilters.tags.parentBrowseFilters[0]));
K+=F.options[L].resultsDelineator
}if(K.length>0){K=K.substring(0,K.length-F.options[L].resultsDelineator.length)
}return K
},k=function(L){var K;
if(L){K=o(L).charAt(0).toUpperCase()+L.slice(1);
return K.replace(/-+$|(-)+/g," ")
}},o=function(K){if(K){return K.replace(/^\s+|\s+$/g,"")
}return K
},D=function(){var K=window.innerWidth||document.documentElement.clientWidth;
return K<F.options.mobileBreakpoint
},c=function(L){var K={tags:{parentBrowseFilters:[]}};
K.tags.parentBrowseFilters=L.tags.parentBrowseFilters.slice();
return K
},e=function(K){if(K){A.push(K)
}};
return{init:p,addCategoryIconClickCallback:e}
})();
var BCUS=BCUS||{};
BCUS.BrowseCardFilterAnalytics=(function(){var a=null,d=function(e){a=e;
c()
},c=function(){if(a){a.addCategoryIconClickCallback(b)
}},b=function(h,g){var f={bcusCardFilterValues:"Filter:"+h};
if(BCUS.DataStoreManager){BCUS.DataStoreManager.storeData("card-explorer",JSON.stringify(f))
}};
return{init:d}
})();
var BCUS=BCUS||{};
BCUS.Breadcrumbs=(function(){var b={},e={mobileBreakpoint:600},f=function(){k();
d();
a();
c();
h()
},k=function(){b.breadcrumbsList=$(".bcus-breadcrumbs__list");
b.breadcrumbsListItems=$(".bcus-breadcrumbs__list-item");
b.window=$(window)
},d=function(){b.window.on("resize",BCUS.Utils.resize(g,150))
},g=function(){c();
h()
},a=function(){var l=b.breadcrumbsListItems[b.breadcrumbsListItems.length-1],m=l.innerText?l.innerText:l.textContent.replace(/^\s+|\s+$/g,"");
e.lastBreadcrumbText=m
},c=function(){var l=j();
if(l){if(b.breadcrumbsListItems.length>2){BCUS.Utils.addClass(b.breadcrumbsListItems[0],"bcus-breadcrumbs__list-item--hidden");
return
}}BCUS.Utils.removeClass(b.breadcrumbsListItems[0],"bcus-breadcrumbs__list-item--hidden")
},j=function(){return BCUS.Utils.isBelowBreakpoint(e.mobileBreakpoint)
},h=function(){var q=50,o=window.innerWidth||document.documentElement.clientWidth,n=document.querySelectorAll(".bcus-breadcrumbs__list-item--last")[0],m=n.previousElementSibling?n.previousElementSibling:$(n).prev("li")[0];
if(m!==undefined||m!=null){var p=m.offsetWidth
}else{var p=0
}var r=e.lastBreadcrumbText,l=(o-p-q)/8;
if(j()&&e.lastBreadcrumbText.length>l){r=e.lastBreadcrumbText.substring(0,l)+"..."
}if(n.innerText){n.innerText=r
}else{n.textContent=r
}};
return{init:f}
})();
var BCUS=BCUS||{};
BCUS.Alert=(function(){var e={},p=false,q={},g=[],d=[],h=function(t){q=t;
a();
m();
c();
n()
},f=function(y){var x={};
if(y.indexOf("?")===0){y=y.substring(1)
}var w=y.split("&");
for(var u=0;
u<w.length;
u++){var v=w[u];
var t=v.indexOf("=");
if(t>-1){x[v.substring(0,t)]=v.substring(t+1)
}}return x
},l=function(v){var w,u=false;
for(var t=0;
t<q.partnerAlertConfiguration.length;
t++){if(q.partnerAlertConfiguration[t].vanityId&&q.partnerAlertConfiguration[t].vanityId===v){w=q.partnerAlertConfiguration[t];
u=true;
break
}}if(u){k(w)
}else{r()
}},o=function(w){var x,u=false;
for(var t=0;
t<q.partnerAlertConfiguration.length;
t++){var v=q.partnerAlertConfiguration[t].cpcValues;
if(v&&v.indexOf(w)>-1){x=q.partnerAlertConfiguration[t];
u=true;
break
}}if(u){k(x)
}else{r()
}},r=function(){var t=q.defaultAlertConfiguration;
k(t)
},k=function(v){var t="";
if(v.enableAlert){t+='<section class="bcus-alert"><div class="bcus-alert__content"><div class="bcus-alert__header--static">'+v.alertHeader+'</div><div class="bcus-alert__alert-text">'+v.alertCopy+"</div>";
if(v.linkUrl&&v.linkText){var u=v.linkUrl;
t+='<a href="'+u+'" alt="'+v.linkAltText+'" class="bcus-alert__link--learn-more">'+v.linkText;
t+='&nbsp;&nbsp;<img src="/etc/designs/bcuspublic/default/icons/link_arrow.png"></a>'
}t+="</div></section>"
}if(t){document.getElementById("bcus-global-alert-Container").innerHTML=t;
p=true
}},a=function(){if(q.partnerAlertConfiguration){var y="";
var v="cpc";
var x=f(window.location.search||"");
var t=x.p;
var w=BCUS.CheckCookie.getCookie("cookieLastViewedCPC");
var u=BCUS.CheckCookie.getCookie("domainCPCCookie");
if(t){y=t;
v="vanityId"
}else{if(w){y=w
}else{if(u){y=u
}}}if(y){if(v==="vanityId"){l(y)
}else{o(y)
}}else{r()
}}else{r()
}},m=function(){e.alertContainer=$(".alert");
e.clickThroughLink=$(".bcus-alert__link--learn-more")
},c=function(){g.push(b)
},n=function(){e.clickThroughLink.on("click",s)
},j=function(t){if(t){d.push(t)
}},b=function(){e.alertContainer.slideToggle(200)
},s=function(u){var t=0;
for(;
t<d.length;
t++){d[t](u)
}};
return{init:h,addClickThroughCallback:j,displayingAlert:function(){return p
}}
})();
var BCUS=BCUS||{};
BCUS.AlertAnalytics=(function(){var e=null,b=null,d=function(g,f){b=g;
e=f;
c()
},c=function(){if(b){b.addClickThroughCallback(a)
}},a=function(){if(e){BCUS.Analytics.recordEvent("AlertClick",e,{})
}};
return{init:d}
})();
var BCUS=BCUS||{};
BCUS.Accordion=(function(){var b={},g=function(n){var m,k=b.toggleElements.length;
for(m=0;
m<k;
m++){var l=b.toggleElements[m];
l.on("click",c)
}if(!n){b.accordionItems.on("keypress",e)
}},a=function(){var m,k=b.toggleElements.length;
for(m=0;
m<k;
m++){var l=b.toggleElements[m];
l.off("click",c)
}if(!isEditMode){b.accordionItems.off("keypress",e)
}},j=function(){b.accordionItems=$(".bcus-accordion__container");
b.content=$(".bcus-accordion__content");
b.toggleElements=[];
var k=$(".bcus-accordion__header");
b.toggleElements.push(k)
},h=function(k){j();
f();
g(k)
},c=function(l){l.preventDefault();
var m=$(l.target);
if(m.is("p")){m=m.parent()
}var k=m.next(".bcus-accordion__content");
d(k,m)
},e=function(m){m.preventDefault();
var k=$(m.target),l=k.find(".bcus-accordion__content"),n=k.find(".bcus-accordion__header");
d(l,n)
},d=function(l,k){if(l&&k){if(l.hasClass("bcus-accordion__content--hidden")){k.addClass("bcus-accordion__header--expanded");
l.removeClass("bcus-accordion__content--hidden")
}else{k.removeClass("bcus-accordion__header--expanded");
l.addClass("bcus-accordion__content--hidden").closest(".bcus-accordion__container")
}}},f=function(){b.content.addClass("bcus-accordion__content--hidden")
};
return{init:h,addEvents:g,removeEvents:a}
})();
var BCUS=BCUS||{};
BCUS.MobileAppsAnalytics=(function(){var e=null;
var a=null;
var d=function(g,f){c();
e=g;
a=f
},c=function(){$(".bcus-contact-us__mobile-apps-component a[data-link-tracking]").click(b)
},b=function(k){var j=$(k.currentTarget),f=j.prop("href"),l={bcusMobileAppsClickValue:h},g=((j.prop("href").indexOf("http://")>-1)||(j.prop("href").indexOf("https://")>-1))?"e":"o",h;
if(f.indexOf("apple.com")>-1){h="App Stores"
}else{if(f.indexOf("google.com")>-1){h="Google Play"
}else{h=""
}}if(a=="mobile-apps"){BCUS.Analytics.recordEvent("mobileAppsClickEvent",e,l,"BCUS:Why Barclaycard:Mobile Apps:"+h,g)
}else{if(a=="contact-us"){BCUS.Analytics.recordEvent("mobileAppsClickEvent",e,l,"BCUS:Contact Us:"+h,g)
}}};
return{init:d}
})();
var BCUS=BCUS||{};
BCUS.MobileApps=(function(){var g={},b={renditionPathString:"/jcr:content/renditions/retina",mobileAppsNamesArray:["mobile-apps-apple.png","mobile-apps-apple-dark.png","mobile-apps-google.png","mobile-apps-google-dark.png"]},d=function(j){j=j||{};
if(!BCUS.Utils.isEmptyObject(j)){for(var k in j){if(b.hasOwnProperty(k)){b[k]=j[k]
}}}if(e()||a()){f();
c()
}},f=function(){g.bodyImages=$(".bcus-contact-us__mobile-apps-body img");
g.window=$(window);
g.document=$(document)
},c=function(){g.window.on("load",h)
},h=function(){var k=[],l,j;
_.each(g.bodyImages,function(m){j=$(m).width();
l=m.src.split("/").pop();
if(b.mobileAppsNamesArray.indexOf(l)!==-1){m.src=m.src+b.renditionPathString;
m.width=j
}})
},e=function(){return((window.matchMedia&&(window.matchMedia("only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)").matches||window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)").matches))||(window.devicePixelRatio&&window.devicePixelRatio>1.3))
},a=function(){return((window.matchMedia&&(window.matchMedia("only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)").matches||window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)").matches))||(window.devicePixelRatio&&window.devicePixelRatio>2))&&/(iPad|iPhone|iPod)/g.test(navigator.userAgent)
};
return{init:d}
})();
var BCUS=BCUS||{};
BCUS.TermsConditions=(function(){var d={},o=[],h=[],a=[],p=function(){r();
l()
},r=function(){d.rewardsLink=$('a[href="#rewards"]');
d.rewardsSummaryHeader=$(".bcus-card-details__rewards-summary-header");
d.rewardsSummaryContent=$(".bcus-card-details__rewards-summary-content");
d.rewardsSummaryContainer=$(".bcus-card-details__rewards-summary");
d.importantInfoLinks=$(".bcus-card-details__disclaimers a");
d.faqsLink=$('a[href="#faqs"]');
d.scrollContent=$("body,html");
d.tcLink=$(".bcus-card-details__terms-conditions-link")
},l=function(){if(d.rewardsLink.length>0){d.rewardsLink.on("click",f)
}if(d.rewardsSummaryContainer.length>0){d.rewardsSummaryContainer.on("click",k)
}if(d.importantInfoLinks.length>0){d.importantInfoLinks.on("click",e)
}if(d.faqsLink.length>0){}d.tcLink.on("click",q)
},g=function(t){var s=t.which;
if(s===13){f(t)
}},f=function(s){s.preventDefault();
b();
d.rewardsSummaryContainer.find("h2").trigger("click")
},k=function(t){var s=0;
for(;
s<a.length;
s++){a[s](t)
}},q=function(t){var s=0;
for(;
s<o.length;
s++){o[s](t)
}},e=function(t){var s=0;
for(;
s<_.length;
s++){h[s](t)
}},b=function(){var t=d.rewardsLink.parents("p"),s=t.offset().top-70;
d.scrollContent.animate({scrollTop:s},300)
},c=function(t){t.preventDefault();
var s=$("#faqs").offset().top-60;
d.scrollContent.animate({scrollTop:s},300)
},m=function(s){if(s){o.push(s)
}},j=function(s){if(s){h.push(s)
}},n=function(s){if(s){a.push(s)
}};
return{init:p,addTermsConditionsLinkCallback:m,addRewardsSummaryCallback:n,addImportantInfoLinkCallback:j}
})();
var BCUS=BCUS||{};
BCUS.TermsConditionsAnalytics=(function(){var f=null,c=null,a=null,e=function(k,j){c=k;
f=j;
d();
a=$(".bcus-card-details__card-base-info").attr("data-card-id")
},d=function(){if(c){c.addTermsConditionsLinkCallback(b);
c.addImportantInfoLinkCallback(h);
c.addRewardsSummaryCallback(g)
}},b=function(k){var j="BCUS:"+a+":T&C's SELECTED";
if(k&&f){BCUS.Analytics.recordEvent("LinkClick",f,{TermsConditionsValue:j},j)
}},h=function(k){var j="BCUS:"+a+":T&C's SELECTED";
if(k&&f){BCUS.Analytics.recordEvent("ImportantInfoLinkClick",f,{ImportantInfoLinkValue:j},j)
}},g=function(){var k="BCUS:"+a+":REWARDS SUMMARY SELECTED",j=$(".bcus-card-details__rewards-summary-header");
if(f&&j.hasClass("bcus-accordion__header bcus-accordion__header--expanded")){BCUS.Analytics.recordEvent("RewardSummaryExpand",f,{TermsConditionsValue:k},k)
}};
return{init:e}
})();
var BCUS=BCUS||{};
BCUS.SecondaryNavigation=(function(){var n={},U={headerHeight:68,secondaryNavHeight:60,showCardNameWidth:560,navAnimationDuration:300,paddingForIndicator:20,secondaryNavBreakpoint:800},k=true,K=false,W=0,L=false,b=[],M=[],N=[],P=function(){A();
t();
c();
G();
R()
},A=function(){n.sectionDisplayedEl=$(".bcus-navigation--secondary-list-item--current");
n.secondaryNav=$(".bcus-navigation--secondary-list");
n.secondaryNavContainer=$(".card-sub-nav");
n.anchorLinks=f();
n.header=$(".bcus-card-details__hero-header");
n.activeIndicator=$(".bcus-navigation__secondary-active-indicator");
n.lastActiveLink=$(f()[0]);
n.secondaryNavSections=[];
n.scrollContent=$("body,html");
n.content=$(".card-details-content");
n.window=$(window);
n.document=$(document);
n.cardName=$(".bcus-card-details__hero-header-part");
n.cardNameWrapper=$(".bcus-card-details__hero-header-inner");
n.button=$(".bcus-navigation--secondary-button")
},t=function(){N.push(S)
},c=function(){n.sectionDisplayedEl.on("click",z);
n.sectionDisplayedEl.on("keypress",g);
n.document.on("click",H);
n.anchorLinks.on("click",a);
n.window.on("resize",D(h,150));
n.button.on("click",q);
n.window.on("scroll",u(F,o,C,50))
},G=function(){k=x()
},x=function(){var Y=window.innerWidth||document.documentElement.clientWidth;
if(Y>U.secondaryNavBreakpoint){return true
}return false
},R=function(){U.lastScrollTop=n.document.scrollTop();
l();
X()
},X=function(){var Z=0,ad,Y,ab,ac,aa;
if(!!k){E()
}for(;
Z<n.secondaryNavSections.length;
Z++){ad=$(n.secondaryNavSections[Z]);
Y=ad.offset().top;
ac=Y-120;
aa=ac+ad.height();
ab=$(n.anchorLinks[0]);
if(U.lastScrollTop>=ac&&U.lastScrollTop<aa){ab=$(n.anchorLinks[Z]);
W=Z;
if(!k){Q(ab)
}else{e(ab)
}j(ab);
return
}}if(n.secondaryNavSections.length>0){j(ab)
}},l=function(){var Y=n.document.scrollTop(),Z=0,aa;
for(;
Z<n.anchorLinks.length;
Z++){aa=n.anchorLinks[Z].getAttribute("href");
if($(aa)[0]){n.secondaryNavSections.push($(aa)[0])
}}},j=function(Y){if(!Y.hasClass("bcus-navigation--secondary-list-link--active")){Y.addClass("bcus-navigation--secondary-list-link--active")
}Y.parent().siblings().find(".bcus-navigation--secondary-list-link--active").removeClass("bcus-navigation--secondary-list-link--active")
},O=function(){return $(".bcus-navigation--secondary-list-link--active")
},E=function(){var Y=U.paddingForIndicator+n.lastActiveLink.width();
n.activeIndicator.width(Y)
},Q=function(Y){var Z=Y||n.lastActiveLink;
n.sectionDisplayedEl.text(Z.text())
},h=function(){var Y=x();
if(k===Y){return
}if(!!Y){s()
}else{B()
}k=Y
},B=function(){var Y=O();
n.activeIndicator.addClass("bcus-navigation__secondary-active-indicator--hidden").removeAttr("style");
Q(Y);
I()
},s=function(){var Y=O(),aa=Y.position().left-(U.paddingForIndicator),Z=Y.width()+U.paddingForIndicator;
if(n.activeIndicator.hasClass("bcus-navigation__secondary-active-indicator--hidden")){n.activeIndicator.removeClass("bcus-navigation__secondary-active-indicator--hidden")
}else{E(Y)
}n.activeIndicator.animate({left:"+="+aa,width:Z},300);
n.lastActiveLink=Y
},r=function(){var aa=n.cardName[0].offsetWidth+n.cardName[1].offsetWidth,Z=window.innerWidth||document.documentElement.clientWidth,Y;
if(n.header.hasClass("bcus-card-details__hero-header--fixed")){if(aa>n.header[0].offsetWidth&&Z>600){n.button.addClass("bcus-navigation--secondary-button--after-card-name")
}else{n.button.removeClass("bcus-navigation--secondary-button--after-card-name")
}}},g=function(Z){var Y=Z.which;
if(Y===13){n.sectionDisplayedEl.trigger("click")
}},z=function(Z){Z.preventDefault();
var Y=$(Z.target);
if(n.secondaryNav.hasClass("bcus-navigation--secondary-list--open")){T()
}else{y()
}},T=function(){n.sectionDisplayedEl.removeClass("bcus-navigation--secondary-list-item--pending");
n.secondaryNav.removeClass("bcus-navigation--secondary-list--open")
},y=function(){n.sectionDisplayedEl.addClass("bcus-navigation--secondary-list-item--pending");
n.secondaryNav.addClass("bcus-navigation--secondary-list--open")
},H=function(Z){var Y=$(Z.target);
if(Y.parents(".card-sub-nav").length===0){if(n.secondaryNav.hasClass("bcus-navigation--secondary-list--open")){T()
}}},a=function(Z){Z.preventDefault();
var Y=0;
for(;
Y<N.length;
Y++){N[Y](Z)
}},S=function(ab){var Y=$(ab.target),aa=$(Y.attr("href")),Z=aa.offset().top-U.headerHeight+8;
if(!K){K=true;
j(Y);
n.scrollContent.animate({scrollTop:Z},U.navAnimationDuration,function(){K=false
});
if(!k&&n.secondaryNav.hasClass("bcus-navigation--secondary-list--open")){T();
n.button.focus()
}}},e=function(Y){var aa=n.lastActiveLink.offset().left-Y.offset().left,Z=Y.width()+U.paddingForIndicator;
if(Y.attr("href")!==n.lastActiveLink.attr("href")){n.activeIndicator.animate({left:"-="+aa,width:Z},300);
n.lastActiveLink=Y
}},D=function(aa,Z){var Y;
return function(){var ad=this,ac=arguments,ab=function(){Y=null;
if(aa){aa.apply(ad,ac)
}};
clearTimeout(Y);
Y=setTimeout(ab,Z);
r()
}
},u=function(Y,Z,aa,ac){var ab;
return function(){var ag=window,af=arguments,ae=aa&&!ab,ad=function(){ab=null;
if(Z){Z.apply(ag,af)
}};
clearTimeout(ab);
ab=setTimeout(ad,ac);
if(ae){aa.apply(ag,af)
}Y()
}
},F=function(){v();
I();
if(n.document.scrollTop()===U.lastScrollTop&&L){return
}if(!K&&n.secondaryNavSections.length>0){if(n.document.scrollTop()>U.lastScrollTop||!L){m();
if(!L){r();
L=true
}}else{w()
}}},o=function(){U.lastScrollTop=n.document.scrollTop();
if(!!K){n.lastActiveLink=O()
}K=false
},C=function(){if(!!K){if(!!k){e(O())
}else{Q(O())
}}},m=function(){var ab=false,Y=(W+1)===n.secondaryNavSections.length?W:W+1,ad=$(n.secondaryNavSections[Y]),aa=ad.offset().top,ac=ad.height(),Z=$(n.anchorLinks[Y]);
if((n.document.scrollTop()>(aa-150))&&(n.document.scrollTop()<(aa+ac))){if(!ab){p(Z);
W=Y;
ab=true;
return
}}},w=function(){var ab=false,aa=W===0?W:W-1,ac=$(n.secondaryNavSections[aa]),Z=ac.offset().top,Y=$(n.anchorLinks[aa]);
if((n.document.scrollTop()>(Z-300))&&(n.document.scrollTop()<(Z))){if(!ab){p(Y);
W=aa;
ab=true;
return
}}},p=function(Z){var Y=0;
if(!k){Q(Z)
}else{e(Z)
}j(Z);
for(;
Y<M.length;
Y++){M[Y](Z)
}},I=function(){if(n.document.scrollTop()>150&&$(window).outerWidth()>U.showCardNameWidth){n.header.addClass("bcus-card-details__hero-header--fixed")
}else{n.header.removeClass("bcus-card-details__hero-header--fixed");
if(n.button.hasClass("bcus-navigation--secondary-button--after-card-name")){n.button.removeClass("bcus-navigation--secondary-button--after-card-name")
}}},v=function(){var Y=U.headerHeight;
var Z=$(".login-container");
if(Z.is(":visible")&&!k){Y+=Z.height()
}if(n.document.scrollTop()>=Y){if(!n.secondaryNavContainer.hasClass("bcus-navigation--secondary--fixed")){n.content.addClass("card-details-content--secondary-nav-fixed");
n.secondaryNavContainer.addClass("bcus-navigation--secondary--fixed")
}}else{n.content.removeClass("card-details-content--secondary-nav-fixed");
n.secondaryNavContainer.removeClass("bcus-navigation--secondary--fixed")
}r()
},d=function(Y){if(Y){b.push(Y)
}},V=function(Y){if(Y){M.push(Y)
}},J=function(Y){if(Y){N.push(Y)
}},q=function(Z){var Y=0;
for(;
Y<b.length;
Y++){b[Y](Z)
}},f=function(){var Y=$(".bcus-navigation--secondary-list-link");
Y.each(function(Z){if($($(this).attr("href")).length<1){$(this).closest("li.bcus-navigation--secondary-list-item").remove();
$(this).remove()
}else{$(this).show()
}});
return Y
};
return{init:P,addCtaButtonClickCallback:d,addSectionViewCallback:V,addNavClickCallback:J}
})();
var BCUS=BCUS||{};
BCUS.SecondaryNavigationAnalytics=(function(){var h=null,a=null,c=null,g=function(k,j){a=k;
h=j;
f();
c=$(".bcus-card-details__card-base-info").attr("data-card-id")
},f=function(){if(a){a.addCtaButtonClickCallback(b);
a.addNavClickCallback(d)
}},b=function(l){var j=l.currentTarget,m=j.textContent,k="BCUS:"+c;
if(l&&h){BCUS.Analytics.recordEvent("ApplyClick",h,{SubNavValue:k+":"+m,SubNavCpcValue:k},k+":"+m)
}},e=function(j){var l=j[0].getAttribute("href").replace("#",""),k="BCUS:"+c+":"+l;
if(l&&h){BCUS.Analytics.recordEvent("SectionView",h,{SubNavValue:k},k)
}},d=function(m){var j=m.currentTarget,l=j.getAttribute("href").replace("#",""),k="BCUS:"+c+":"+l;
if(l&&h){BCUS.Analytics.recordEvent("NavClick",h,{SubNavValue:k},k)
}};
return{init:g}
})();
var BCUS=BCUS||{};
BCUS.Faqs=(function(){var e={},c=[],b=function(){d();
a()
},d=function(){e.question=$(".bcus__faq-list-item--question");
e.answer=$(".bcus__faq-list-item--answer");
e.questionContainer=$(".bcus__faq-list-item")
},a=function(){e.questionContainer.on("keypress",h);
e.question.on("click",g)
},h=function(k){var j=k.which;
if(j===13){g(k)
}},g=function(k){var j=0;
for(;
j<c.length;
j++){c[j](k)
}},f=function(j){if(j){c.push(j)
}};
return{init:b,addFaqQuestionClickCallback:f}
})();
var BCUS=BCUS||{};
BCUS.FaqsAnalytics=(function(){var f=null,e=null,a=null,b=null,d=function(k,j,h){e=k;
f=j;
a=h;
c();
b=$(".bcus-card-details__card-base-info").attr("data-card-id")
},c=function(){if(e&&a==="card-details"){e.addFaqQuestionClickCallback(g)
}},g=function(j){var h=$(j.currentTarget);
if(h&&f){if(h.hasClass("bcus-accordion__header--expanded")){BCUS.Analytics.recordEvent("faqExpand",f,{faqExpandValue:"BCUS:"+b+":faqExpanded"},"BCUS:"+b+":FAQ SELECTED")
}}};
return{init:d}
})();
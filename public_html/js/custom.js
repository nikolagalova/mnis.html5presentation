/*
 * Function allowing direct linking to an individual tab
 */
jQuery(document).ready(function($){
// Allow Page URL to activate a tab's ID
var taburl = document.location.toString();
if( taburl.match('#') ) {
$('.nav-tabs a[href=#'+taburl.split('#')[1]+']').tab('show');
}
 
// Allow internal links to activate a tab.
$('a[data-toggle="tab"]').click(function (e) {
e.preventDefault();
$('a[href="' + $(this).attr('href') + '"]').tab('show');
});
 
});



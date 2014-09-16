/**
 * This loads the widgets and a getAll function for them
 */
define([
	// These have to be w/ so r.js inlines them
	"w/analytics",	"w/apps",			"w/bookmarks",
	"w/calc",		"w/calendar",		"w/clock",
	"w/currency",	"w/drive",			"w/facebook",
	"w/feedly",		"w/gmail",			"w/iframe",
	"w/keep",		"w/news",			"w/notes",
	"w/now",		"w/plus",			"w/reddit",
	"w/rss",		"w/sports",			"w/stocks",
	"w/todo",		"w/topsites",		"w/traffic",
	"w/translate",	"w/twitter",		"w/unread",
	"w/voice",		"w/weather",		"w/wolfram",
	"w/youtube",	"w/recentlyclosed",

	"lib/jquery.numberformatter", "lib/jquery.sortable", "oauth2"
], function() {
	var widgets = {};

	// Lodash has a method for this but it's simpler given the list of widgets
	[].slice.call(arguments, 0).forEach(function(e, i) {
		if (e && e.id && e.nicename) {
			widgets[e.id] = widgets[e.nicename] = e;
		}
	});

	return widgets;
});
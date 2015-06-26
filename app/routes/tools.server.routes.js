'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users');
	var tools = require('../../app/controllers/tools');

	// Tools Routes
	app.route('/tools');

	// app.route('/tools/:toolId')
	// 	.get(tools.read)
	// 	.put(users.requiresLogin, tools.hasAuthorization, tools.update)
	// 	.delete(users.requiresLogin, tools.hasAuthorization, tools.delete);

	// custom tools routes
	app.route('/tools/sendtalentemails')
		.post(users.requiresLogin, tools.sendTalentEmails);

	app.route('/tools/sendPreCloseSummary')
		.get(tools.sendPreCloseSummary);

	// call list routes
	app.route('/tools/gatherTalentsToCall')
		.post(users.requiresLogin, tools.gatherTalentsToCall);

	app.route('/tools/gatherTalentsMessagesLeft')
		.post(users.requiresLogin, tools.gatherTalentsMessagesLeft);

	app.route('/tools/gatherTalentsAlreadyScheduled')
		.post(users.requiresLogin, tools.gatherTalentsAlreadyScheduled);

};
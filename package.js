Package.describe({
	name: 'windol:meteor-audit-schema',
	version: '0.0.1',
	// Brief, one-line summary of the package.
	summary: 'Meteor audit schema',
	// URL to the Git repository containing the source code for this package.
	git: 'https://github.com/Windol/meteor-audit-schema.git',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom("1.4.4.3");

	api.use("ecmascript");
	api.use("tracker");
	api.use("accounts-base");
	//api.use("aldeed:schema-deny");
	api.use(["meteor", "mongo"], ["client", "server"]);

	api.export('AuditSchema', ['server', 'client']);

	api.addFiles('collections/AuditSchema.js', ['client', 'server']);
});

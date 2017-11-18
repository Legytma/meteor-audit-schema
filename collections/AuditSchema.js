import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

AuditSchema = new SimpleSchema({
	createdBy: {
		type: String,
		label: "Created By",
		//denyUpdate: true,
		autoValue: function() {
			if (this.isInsert) {
				if (Meteor.isClient) {
					return this.userId;
				} else if (Meteor.isServer) {
					return Meteor.userId();
				}
			} else if (this.isUpsert) {
				if (Meteor.isClient) {
					return {$setOnInsert: this.userId};
				} else if (Meteor.isServer) {
					return {$setOnInsert: Meteor.userId()};
				}
			} else {
				this.unset();  // Prevent user from supplying their own value
			}
		},
		autoform: {
			type: "hidden"
		}
	},
	createdAt: {
		type: Date,
		label: "Created At",
		//denyUpdate: true,
		autoValue: function() {
			if (this.isInsert) {
				return new Date();
			} else if (this.isUpsert) {
				return {$setOnInsert: new Date()};
			} else {
				this.unset();  // Prevent user from supplying their own value
			}
		},
		autoform: {
			type: "hidden"
		}
	},
	updatedBy: {
		type: String,
		label: "Updated By",
		//optional: true,
		//denyInsert: true,
		autoValue: function() {
//			if (this.isUpdate) {
				if (Meteor.isClient) {
					return this.userId;
				} else if (Meteor.isServer) {
					return Meteor.userId();
				}
//			} else {
//				this.unset();  // Prevent user from supplying their own value
//			}
		},
		autoform: {
			type: "hidden"
		}
	},
	updatedAt: {
		type: Date,
		label: "Updated At",
		//optional: true,
		//denyInsert: true,
		autoValue: function() {
//			if (this.isUpdate) {
				return new Date();
//			} else {
//				this.unset();  // Prevent user from supplying their own value
//			}
		},
		autoform: {
			type: "hidden"
		}
	}
}, {tracker: Tracker});

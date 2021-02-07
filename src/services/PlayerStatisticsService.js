import m from 'mithril';

export default {
	searchResults: [],
	searchResultParams: {},
	search(params = {}) {
		// Make sure we have something to search for
		if(params == null || typeof params == 'undefined') {
			this.searchResults = [];
			return;
		}

		// Make sure that it is something meaningful
		if(params.length < 1 || params.length > 16) {
			this.searchResults = [];
			return;
		}

		this.searchResultParams = params;

		// Ask for the data
		return m.request({
			method: 'GET',
			url: `https://player.peacefulcraft.net/api.php?action=search&params=${params}`,
			withCredentials: false
		})
				
		// Process the answer; store the result
			.then((resp) => {
				if(resp.length == 0){
					this.searchResults = [];
					return;
				}
				this.searchResults = resp;
			})
				
		// If something goes wrong
		// TODO: Better (any) error reporting for non-technical users
			.catch((error) => {
				this.results = [];
				console.log('[PCN]' + error.code);
				console.log(error.message);
			});
	},

	profileResults: {},
	profileResultParams: undefined,
	fetchProfile(uuid = undefined) {
		// Verify we have a valid uuid
		if(uuid == null || typeof uuid == 'undefined'){ return; }
		if(uuid.length != 32){ return; }
	
		this.profileResultParams = uuid;

		// Ask for the data
		return m.request({
			method: 'GET',
			url: `https://player.peacefulcraft.net/api.php?action=profile&params=${uuid}`,
			withCredentials: false
		})
				
		// Process the answer
			.then( (resp) => {
				if(resp.length == 0){
					this.profileResults = [];
					return;
				}
				this.profileResults = resp;
			})
				
		// Report if something goes wrong
		// TODO: Better (any) reporting to non-technical users
			.catch( (error) => {
				this.results = null;
				console.log('[PCN]' + error.code);
				console.log(error.message);
			});	
	}
};
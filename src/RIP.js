/*! RIP 0.3.7 (https://github.com/pyrsmk/RIP) */

var request_attribute_name = '_METHOD';

var RIP = {

	/*
		Set the REST request attribute name

		Parameters
			String name
	*/
	setRequestAttributeName: function(name) {
		request_attribute_name = name;
	},

	/*
		Map a custom request

		Parameters
			String method
			String url
			Object data
	*/
	map: function(method, url, data) {
		// Prepare
		var form,
			build = function(value, name) {
				var inputs = '',
					i, j, n;
				if(value.pop) {
					for(i=0, j=value.length; i<j; ++i) {
						if(name) {
							n = name+'['+i+']';
						}
						else {
							n = i;
						}
						inputs += build(value[i], n);
					}
				}
				else if(typeof value == 'object') {
					for(i in value) {
						if(name) {
							n = name + '[' + i + ']';
						}
						else {
							n = i;
						}
						inputs += build(value[i], n);
					}
				}
				else {
					inputs += '<input type="hidden" name="' + name + '" value="' + value.replace(/"/g, '&quot;') + '">';
				}
				return inputs;
			};
		// Format
		data = data || {};
		// Define method
		data[request_attribute_name] = method;
		// Create form
		form = document.createElement('form');
		document.getElementsByTagName('body')[0].appendChild(form);
		form.setAttribute('action', url);
		form.setAttribute('method', 'post');
		// Create inputs
		form.innerHTML = build(data);
		// Submit!
		form.submit();
	},

	/*
		POST request

		Parameters
			String url
			Object data
	*/
	POST: function(url, data) {
		this.map('POST', url, data);
	},

	/*
		PUT request

		Parameters
			String url
			Object data
	*/
	PUT: function(url, data) {
		this.map('PUT', url, data);
	},

	/*
		DELETE request

		Parameters
			String url
			Object data
	*/
	DELETE: function(url, data) {
		this.map('DELETE', url, data);
	}

};

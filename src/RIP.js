/*
	RIP, REST in peace

	Author
		Aurélien Delogu (dev@dreamysource.fr)
*/

this.RIP=function(){

	var request_attribute_name='_METHOD';

	return {

		setRequestAttributeName:function(name){
			request_attribute_name=name;
		},

		/*
			Map a custom request

			Parameters
				String method
				String url
				Object data
		*/
		map:function(method,url,data){
			// Define method
			if(data===undefined){
				data={};
			}
			data[request_attribute_name]=method;
			// Prepare form
			var form=document.createElement('form'),
				inputs='';
			document.getElementsByTagName('body')[0].appendChild(form);
			form.setAttribute('action',url);
			form.setAttribute('method','post');
			// Add data
			for(var name in data){
				if(data[name] instanceof Array){
					for(var i=0,j=data[name].length;i<j;++i){
						inputs+='<input type="hidden" name="'+name+'[]" value="'+data[name][i]+'">';
					}
				}
				else{
					inputs+='<input type="hidden" name="'+name+'" value="'+data[name]+'">';
				}
			}
			form.innerHTML=inputs;
			// Submit!
			form.submit();
		},

		/*
			POST request

			Parameters
				String url
				Object data
		*/
		POST:function(url,data){
			this.map('POST',url,data);
		},

		/*
			PUT request

			Parameters
				String url
				Object data
		*/
		PUT:function(url,data){
			this.map('PUT',url,data);
		},

		/*
			DELETE request

			Parameters
				String url
				Object data
		*/
		DELETE:function(url,data){
			this.map('DELETE',url,data);
		}

	};
	
}();

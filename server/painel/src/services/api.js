const baseUrl = '';
const request = async (method, endpoint, params, token) => {
  method = method.toLowerCase();
  let fullUrl = `${baseUrl}${endpoint}`;
  let body = null;

  switch(method){
    case 'get':
      let queryString = new URLSearchParams(params).toString();
    break;
    case 'post':
    case 'put':
    case 'delete':

    break;
  }
}

export default ()=> {
  return{
    login: async (email, password) => {

    }
  }
}

export default async function request(url, method, data){
    let option = {};

    if(method){
        option.method = method;
    }

    if(data){
        option.header = {
            'content-type': 'application/json',
        };
        option.body = JSON.stringify(data);

        option.body = JSON.stringify(data);
    }

    const response = await fetch(url,option);

    if(response.status >= 400){
        throw response.statusText;
    }

    const result = await(response.json());

    return result;
}
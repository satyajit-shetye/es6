export default class HTTP{
    static get(url){
        return new Promise((resolve, reject)=>{
            const HTTP_REQUEST = new XMLHttpRequest();
            HTTP_REQUEST.open('GET', url);
            HTTP_REQUEST.onreadystatechange = () => {
                if(HTTP_REQUEST.readyState == XMLHttpRequest.DONE 
                    && HTTP_REQUEST.status == 200){
                    resolve(JSON.parse(HTTP_REQUEST.responseText));
                } else if(HTTP_REQUEST.readyState == XMLHttpRequest.DONE ) {
                    reject('Data could not be fetched. Please contact administrator.');
                }
            }
            HTTP_REQUEST.send();
        });
        
    }
}
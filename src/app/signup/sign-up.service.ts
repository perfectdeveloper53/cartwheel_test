import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class SignUpService {
    url = environment.API + "account";
    getHeaders() {
        return  new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.access_token
       });
    };
    getOptions() {
        return new RequestOptions({ headers: this.getHeaders() });
    }
    constructor(private http:Http) { 
    }
    signUp(signUpObj): Promise<any> {
        return this.http.post(this.url + '/signup', signUpObj, this.getOptions()).toPromise()
               .then(this.extractData).catch(this.handleErrorPromise);
    }
    private extractData(res: Response) {
	       return  res.json();
    }
    private handleErrorPromise (error: Response | any) {
    	   console.error(error.message || error);
    	   return Promise.reject(error.message || error);
    }	
} 
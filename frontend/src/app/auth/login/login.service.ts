import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private readonly http: HttpClient){}

  public login(username: string , password: string){
    // @ts-ignore
    let body = JSON.stringify({username: username, password: password});
    this.http.post(
      "http://localhost:4000/api/login",
      body,
      {headers: {"Content-Type" : "application/json"} })
      .subscribe((token : {access_token: string}) => {
          this.http.get("http://localhost:4000/api/me",
            {headers: {"Authorization": "Bearer " + token.access_token}})
            .subscribe(user => console.log(user),
              err => console.log(err));
        },
        err => console.log(err));
  }
}

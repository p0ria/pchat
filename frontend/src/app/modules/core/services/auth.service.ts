import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../../models/user.model";

@Injectable()
export class AuthService {
  constructor(private readonly http: HttpClient){}

  public login(username: string , password: string){
    let body = JSON.stringify({username: username, password: password});
    return this.http.post(
      "http://localhost:3000/api/login",
      body,
      {headers: {"Content-Type" : "application/json", "No-Auth" : "True"} }
    );
  }

  public getProfile(token: string): Observable<User>{
    return this.http.get<User>(
      "http://localhost:3000/api/me"
    );
  }

  public uploadAvatar(avatar: File): Observable<any>{
    const formData = new FormData();
    formData.append('avatar', avatar);
    return this.http.post(
      "http://localhost:3000/api/users/upload",
      formData,
      {responseType: "text", headers: {"No-Auth": "True"}}
    );
  }

  public register(username: string, password: string, avatarUrlRelative: string): Observable<User> {
    let body = JSON.stringify(
      {username: username, password: password, avatarUrlRelative: avatarUrlRelative});
    return this.http.post<User>(
      "http://localhost:3000/api/users",
      body,
      {headers: {"Content-Type": "application/json", "No-Auth": "True"}}
    );
  }
}

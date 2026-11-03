import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { FileModel } from "../models/fileModel";
import { Observable } from "rxjs";

@Injectable()
export class ServicePostFiles {
    constructor(private _http: HttpClient) { }

    postFile(filemodel: FileModel): Observable<any> {
        let json = JSON.stringify(filemodel);
        let header = new HttpHeaders().set("content-type", "application/json");
        let request = "api/testingfiles";
        let url = environment.urlApiFiles + request;
        return this._http.post(url, json, { headers: header });
    }
}
import { HttpClient, HttpContext, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { firstValueFrom, Observable } from "rxjs";
import { Login } from "../models/login";
import { Empleado } from "../models/empleado";
import { SKIP_TOKEN } from "../utils/token.context";

@Injectable()
export class ServiceEmpleados {
    url = environment.urlApiEmpleados;
    constructor(private _http: HttpClient) { }

    async logInEmpleadoAsync(user: Login): Promise<any> {
        let request = "auth/login";
        let json = JSON.stringify(user);
        let header = new HttpHeaders()
            .set("content-type", "application/json");
        return firstValueFrom(
            this._http.post(this.url + request, json, {
                headers: header,
                context: new HttpContext().set(SKIP_TOKEN, true)
            })
        )
    }

    logInEmpleadoObservable(user: Login): Observable<any> {
        let request = "auth/login";
        let json = JSON.stringify(user);
        let header = new HttpHeaders()
            .set("content-type", "application/json");
        return this._http.post(this.url + request, json, { headers: header })
    }

    async getPerfilEmpleadoAsync(): Promise<Empleado> {
        let request = "api/empleados/perfilempleado";
        let token = sessionStorage.getItem("TOKEN");
        let header = new HttpHeaders()
            .set("Authorization", "bearer " + token);
        return firstValueFrom(
            this._http.get<Empleado>(this.url + request, { headers: header })
        )
    }

    async getSubordinadosAsync(): Promise<Empleado[]> {
        let request = "api/empleados/subordinados";
        return firstValueFrom(
            this._http.get<Empleado[]>(this.url + request)
        )
    }
}
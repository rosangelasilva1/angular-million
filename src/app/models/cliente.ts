import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { environment } from 'src/environments/environment'


export class Cliente{
    public _id:string = "";
    public nome: string = "";
    public sobrenome:string = "";
    public cpf: string= "";
    public login: string= "";
    public senha: string= "";
    public createat:string= "";
    public updateat:string= "";

    constructor(private http:HttpClient){

    }
    
    public getTodos():Cliente[]{
        return []
    }

    public fazerLogin(callback):void{
        this.http.post(`${environment.apiClientes}/cliente/login`,this,
        { headers: new HttpHeaders({'token':environment.token})}).subscribe((cliente: Cliente)=>{
            callback.call(null,cliente);
        },(error:HttpErrorResponse)=> {
            callback.call(null,null);    
        }) 
    }
}
    
  
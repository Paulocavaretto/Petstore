import { Parameters } from '../interfaces/parameters';
import { Observable } from 'rxjs';

export class ParametersServiceMock {

  parameters: Parameters = {
    "company_name": "Petstore LTDA",
    "country_code": "+55",
    "number": "(11) 94063-4100",
    "account": "imobzi",
    "type": "whatsapp",
    "name": "Facebook",
    "trademark": "Petstore",
    "email": "contato@petstore-sp.com.br",
    "adress": "Avenida das Nações Unidas, 18801",
    "adress_complement": "Novámerica Office - Conj. 1010",
    "city": "São Paulo",
    "state": "SP",
    "zip_code": "04795-100",
    "social_networks": [
        {
            "account": "imobzi",
            "name": "Facebook"
        },
        {
            "account": "showcase/imobzi",
            "name": "LinkedIn"
        },
        {
            "account": "channel/UCJRRIxw4sdVgmMYCQuy8pug",
            "name": "Youtube"
        },
        {
            "account": "explore/tags/imobzi/",
            "name": "Instagram"
        }
    ],
    "phones": [
        {
            "type": "Principal",
            "number": "(11) 4063-4100",
            "country_code": "+55"
        },
        {
            "type": "whatsapp",
            "number": "(11) 94063-4100",
            "country_code": "+55"
        }
    ]
}
   

    constructor() { }

    getParameters(): Observable<Parameters> {
        return new Observable<Parameters>(observer => {

            observer.next(this.parameters);
            observer.complete();

        });

    }
}
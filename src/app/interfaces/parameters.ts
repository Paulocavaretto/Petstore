export interface Parameters {
    account: string;
    company_name: string;
    trademark: string;
    email: string;
    adress: string;
    adress_complement: string;
    city: string;
    state: string;
    zip_code: string;
    social_networks: Array<SocialNetwork>;
    phones: Array<Phone>
    name: string;
    number: string;
    type: string;
    country_code: string;
}

export interface SocialNetwork {
    account: string;
    name: string;
}

export interface Phone {
    type: string;
    number: string;
    country_code: string;
}
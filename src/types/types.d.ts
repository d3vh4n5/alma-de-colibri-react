// https://app.quicktype.io/


export type Product = {
    id:                 number;
    name:               string;
    description:        string;
    price:              string;
    cost:               string;
    image:              string;
    stock:              number;
    last_restocked_at:  Date;
    expiration_days:    number;
    created_at:         Date;
    updated_at:         Date;
    related_discount:   number | null;
    created_by:         number;
    updated_by:         number;
    related_categories: number[];
}

export type Category = {
    id:               number;
    name:             string;
    description:      string;
    created_at:       Date;
    updated_at:       Date;
    related_discount: number | null;
    created_by:       number;
    updated_by:       number;
}

export type User = {
    id:               number;
    password:         string;
    last_login:       Date;
    is_superuser:     boolean;
    username:         string;
    first_name:       string;
    last_name:        string;
    email:            string;
    is_staff:         boolean;
    is_active:        boolean;
    date_joined:      Date;
    phone:            string;
    related_discount: number | null;
    groups:           string[];
    user_permissions: string[];
}
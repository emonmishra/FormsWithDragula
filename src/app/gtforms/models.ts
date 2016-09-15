export enum Cardinality { SINGLE, MULTIPLE };

export interface  RecordType {
    id: string;
    name: string;
    title: string;
    description: string;
    cardinality: Cardinality;
    system: boolean;
    enabled: boolean;
    table: string;
    persistenceManagerKey: string;
}

export interface Option {
    key: string | Number;
    value: string;
    visible: boolean;
}

export interface Field {
    id: string;
    name: string;
    title: string;
    description: string;
    recordType: string;
    dataType: string;
    controlType: string;
    system: boolean;
    enabled: boolean;
    fk: boolean;
    fkReference: string;
    options: Option[];
    writeAccess: String[];
    readAccess: String[];
}

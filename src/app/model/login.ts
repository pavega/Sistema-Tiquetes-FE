export interface LoggedUser {
  id: number;
  rolId: number;
  name: string;
  email: string;
  phone: string;
  state: UserState;
  identification: string;
  jobPosition: string;
  department: string;
}

export interface Login {
  Correo: string;
  Clave: string;
}

export function convertToLoginModel(data: any): LoggedUser {
  return {
    id: data.Id,
    rolId: data.IdRol,
    name: data.Nombre,
    email: data.Correo,
    phone: data.Telefono,
    state: data.Estado,
    identification: data.Cedula,
    jobPosition: data.Puesto,
    department: data.Departamento,
  };
}

export enum UserState {
  ACTIVE = 1,
  INACTIVE = 2,
}

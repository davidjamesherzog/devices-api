export interface Networks {
  id: number;
  name: string;
  type: NetworkTypes;
}

export enum NetworkTypes {
  WIRED = 'Wired',
  WIFI = 'WIFI'
}

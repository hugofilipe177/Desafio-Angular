export interface Veiculos extends Array<Veiculo> {}

export interface Veiculo{
  id: number | string
  vehicle: string
  volumetotal: number | string
  connected: number | string
  softwareUpdates: number | string
  img: string
}

export interface vinVeiculos {
  id: number,
  odometro: number,
  nivelCombustivel: number,
  status: string,
  lat: number,
  long: number,
}
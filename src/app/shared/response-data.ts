import { transport } from './transport';

export class responseData
{
  LatestUpdate?: string;
  DataAge?: number;
  Buses?: Array<transport>;
  Metros?: Array<transport>;
  Ships?: Array<transport>;
  Trains?: Array<transport>;
  Trams?: Array<transport>;
  StopPointDeviations?: [];
}

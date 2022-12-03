export default interface Log {
  id: string;
  method: string;
  route: string;
  status: number;
  responseTime: number;
  createdAt: Date;
}

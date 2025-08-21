declare module "svix" {
  export interface SvixHeaders {
    [key: string]: string;
  }

  export class Webhook {
    constructor(secret: string);
    verify(payload: string, headers: SvixHeaders): any;
  }

  export default Webhook;
}

export class DeleteCustomerController {
    constructor(deleteCustomerUseCase) {
      this.deleteCustomerUseCase = deleteCustomerUseCase;
    }
  
    async handle(httpRequest) {
      try {
        if (!httpRequest) {
          return HttpResponse.InternalError();
        }
  
        const customer = await this.deleteCustomerUseCase.execute(httpRequest.id);
        console.log(httpRequest)
        if (!httpRequest.id) {
          return HttpResponse.badRequest(new MissingParamError("id"));
        }
  
        return HttpResponse.ok(customer);
      } catch (error) {
        console.error(error);
        return HttpResponse.unauthorizeError();
      }
    }
  }
  
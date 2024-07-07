import { Controller, Get, Param, Query } from '@nestjs/common';
import { ExternalGraphQLService } from '../services/external-graphql.service';

@Controller('external-data')
export class ExternalDataController {
  constructor(private readonly externalGraphQLService: ExternalGraphQLService) {}

  @Get()
  async getExternalData(@Query('someParam') someParam: string) {
    const query = `
      query($param: String) {
        yourQuery(param: $param) {
          field1
          field2
        }
      }
    `;

    const variables = { param: someParam };
    const data = await this.externalGraphQLService.fetchData(query, variables);
    return data;
  }
}
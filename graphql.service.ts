import { Injectable, HttpException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ExternalGraphQLService {
  constructor(private readonly httpService: HttpService) {}

  async fetchData(query: string, variables: Record<string, any> = {}): Promise<AxiosResponse<any>> {
    const url = 'https://your-external-graphql-endpoint.com/graphql'; // Your external GraphQL endpoint
    try {
      const response = await lastValueFrom(
        this.httpService.post(url, {
          query,
          variables
        })
      );
      return response.data;
    } catch (error) {
      throw new HttpException('Error fetching data from external GraphQL', 500);
    }
  }
}
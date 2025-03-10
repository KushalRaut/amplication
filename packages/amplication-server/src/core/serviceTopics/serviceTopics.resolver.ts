import { Resolver } from '@nestjs/graphql';
import { ServiceTopicsService } from './serviceTopics.service';
import { FindManyServiceTopicsArgs } from './dto/FindManyServiceTopicsArgs';
import { BlockTypeResolver } from '../block/blockType.resolver';
import { ServiceTopics } from './dto/ServiceTopics';
import { CreateServiceTopicsArgs } from './dto/CreateServiceTopicsArgs';
import { UpdateServiceTopicsArgs } from './dto/UpdateServiceTopicsArgs';

@Resolver(() => ServiceTopics)
export class ServiceTopicsResolver extends BlockTypeResolver(
  ServiceTopics,
  'ServiceTopicsList',
  FindManyServiceTopicsArgs,
  'createServiceTopics',
  CreateServiceTopicsArgs,
  'updateServiceTopics',
  UpdateServiceTopicsArgs
) {
  constructor(private readonly service: ServiceTopicsService) {
    super();
  }
}

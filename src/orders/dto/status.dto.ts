import { IsEnum, IsOptional } from 'class-validator';
import { OrdersStatusList, OrderStatus } from '../enum/order.enum';

export class StatusDto {
  @IsOptional()
  @IsEnum(OrdersStatusList, {
    message: 'Valid status values are ${OrdersStatusList}',
  })
  status: OrderStatus;
}

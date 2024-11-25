import { IsEnum, IsOptional } from 'class-validator';
import { PaginationDto } from 'src/common';
import { OrdersStatusList, OrderStatus } from '../enum/order.enum';

export class OrderPaginationDto extends PaginationDto {
  @IsOptional()
  @IsEnum(OrdersStatusList, {
    message: `Valid status values are ${OrdersStatusList}`,
  })
  status?: OrderStatus;
}

import { IsBoolean } from 'class-validator';

export class ApproveReportsDto {
  @IsBoolean()
  approved: boolean;
}

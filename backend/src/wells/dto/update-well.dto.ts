import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty, IsInt, IsDate } from 'class-validator';

export class UpdateWellDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  related_well: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  date_fact: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  debit: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  ee_consume: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  expenses: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  pump_operating: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  well: number;
}

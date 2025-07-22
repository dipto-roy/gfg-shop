export class CreateSellerDto {
  readonly name: string;
  readonly email: string;
  readonly businessName: string;
  readonly phone?: string;
  readonly address?: string;
  readonly category: string;
}

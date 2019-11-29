type Address = {
  administrative_area: string;
  country: string;
  full_name: string;
  id: number;
  locality: string;
  postal_code: string;
  thoroughfare: string;
}

export interface User {
  addresses: Address[],
  avatar_url: string;
  bank_account: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
}

export interface Product {
  product_id: number;
  name: string;
  price: number;
  discount: number;
  best_choice: boolean;
  freight: string;
  image_url: string;
}

export interface DataFormat {
  video_headline: string;
  video_sub_headline: string;
  video_url: string;
  products: Product[];
}

export interface FormData {
  product_id: number;
  name: string;
  email: string;
  phone_number: string;
  street_number: string;
  street: string;
  district: string;
  city: string;
  state: string;
}

export async function fetchData(): Promise<DataFormat> {
  const response = await fetch(
    "https://api-candidate.ogruposix.com/checkout/95BD9233-8FDC-48AD-B4C5-E5BAF7578C15",
    {
      headers: {
        "Content-Type": "application/json",
        "user-token": process.env.NEXT_PUBLIC_API_USER_TOKEN as string,
      },
    }
  );

  const jsonData = await response.json();
  return jsonData.object[0] as DataFormat;
}

export async function sendFormData(data: FormData) {
  const response = await fetch(
    `https://api-candidate.ogruposix.com/buy/${data.product_id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "user-token": process.env.NEXT_PUBLIC_API_USER_TOKEN as string,
      },
      body: JSON.stringify(data),
    }
  );

  const responseData = await response.json();

  return responseData;
}

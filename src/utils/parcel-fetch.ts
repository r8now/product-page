export type Parcel= {
  id: number
  status: string
  eta: string
  parcel_id: string
  sender: string
  verification_required: boolean
  location_id: string
  location_name: string
  location_coordinate_latitude: number
  location_coordinate_longitude: number
  location_status_ok: boolean
  user_phone: string
  user_name: string
  notes?: string
  last_updated: string
}

export async function getAllParcelData(): Promise<Array<Parcel>> {
  try{
    const res = await fetch('https://my.api.mockaroo.com/orders.json?key=e49e6840')
    if (!res.ok) {
      throw new Error('Failed to fetch parcels');
    }
    return res.json();
  }catch (error) {
    console.error("Error fetching parcel data:", error);
    return [];
  }
}

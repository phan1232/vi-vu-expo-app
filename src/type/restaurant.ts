export interface IRestaurant {
  id?: string;
  name: string;
  image: string;
  address: string;
  description?: string; // mô tả chung về địa điểm
  services?: { 
    id: string;
    name: string;
    image: string;
  }[]; // loại dịch vụ
  lat: number;
  lng: number;
  category: string[];
  district?: string;
  price: {
    min: number;
    max: number;
  };
  time: {
    open: string;
    close: string;
  };
  rating?: number;
  commentCount?: number;
}
export interface IComment {
  id?: string;
  resId: string;
  userId: string;
  comment: ICommentForm;
}

export interface ICommentForm {
  title: string;
  content: string;
  avgRating: number;
  imageUrl: string;
  imageName: string;
  timestamp: Date;
  vote: {
    [userId: string]: -1 | 1;
  };
}

export interface IRating {
  location: number;
  price: number;
  quality: number;
  service: number;
  space: number;
}

export enum EResStatus {
  OPEN = "1",
  CLOSE = "0",
}

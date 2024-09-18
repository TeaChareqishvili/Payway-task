export interface LinksTypes {
  id: number;
  icon: string;
  address: string;
}

export interface ServiceTypes {
  id: number;
  image: string;
  number: string;
  title: string;
  text: string;
  arrow: string;
  background: string;
}

export interface LoadMoreBtnTypes {
  handleClick: () => void;
  showMore: boolean;
}

export interface SlideTypes {
  id: number;
  image: string;
}

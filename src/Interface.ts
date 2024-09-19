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

export interface TeamType {
  id: number;
  image: string;
  name: string;
  position: string;
}

export interface SocialLinksProps {
  justifyContent: string;
  display: string;
}
export interface NavigationProps {
  flexDirection?: string;
  marginBottom: string;
}

export interface PaginationProps {
  totalPages: number;
  onPageChange: (page: number) => void;
}

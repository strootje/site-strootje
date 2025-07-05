export type Pagable<T> = {
  _embedded: T;
  _links: {
    self: { href: string };
    next?: { href: string };
    prev?: { href: string };
  };
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  };
};

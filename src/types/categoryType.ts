export type Category = {
  title: string;
  url: string;
  subCategories: { subTitle: string; subUrl: string }[];
};

export type Opps = {
  id: string;
  title: string;
  image: string;
};

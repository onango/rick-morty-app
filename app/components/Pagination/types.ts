import { Url } from "next/dist/shared/lib/router/router";

export interface PageDataType {
  data: {
    url?: Url;
    pageNumber?: number;
  };
}

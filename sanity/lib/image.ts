import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from "../env";

// https://www.sanity.io/docs/image-url
const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

export const urlForImage = (source: any) => {
  if (!source || !source.asset) {
    return {
      url: "https://via.placeholder.com/400x300?text=Image+Not+Available",
      width: () => 400,
      height: () => 300,
      auto: () => imageBuilder,
    };
  }

  return imageBuilder?.image(source).fit("max").auto("format").url();
};

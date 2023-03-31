import qs from "qs";
/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getStrapiURL(path: string = ""): string {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
    }${path}`;
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchNavData(
  options: object = {},
  urlParamsObject: object = {}
): Promise<NavItems[]> {
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  const queryString = qs.stringify(
    {
      populate: {
        variant1: {
          populate: ["tile", "subTiles"],
        },
        variant2: {
          populate: ["components"],
        },
        variant3: {
          populate: ["*"],
        },
        brandLogo: {
          populate: ["*"],
        },
      },
    },
  );

  const requestUrl = `${getStrapiURL(
    `/api/nav-datas${queryString ? `?${queryString}` : ""}`
  )}`;

  const response = await fetch(requestUrl, mergedOptions);

  if (!response.ok) {
    console.error(response);
    throw new Error(`An error occured please try again`);
  }

  const data = await response.json();

  return data.length > 0 ? data.data[0].attributes : [];
}

export type NavBarData = {
  brandLogo: BrandLogo;
  variant1: Variant1[];
  variant2: Variant2[];
  variant3: Variant3[];
};

export type NavItem = {
  data: {
    id: string;
    attributes: {
      title: string;
      description: string;
      href?: string;
    };
  }
};

export type SubTile = {
  id: string;
  attributes: {
    title: string;
    description: string;
    href?: string;
  };
}

export type NavItems = (
  | { show: boolean; item: Variant1 }
  | { show: boolean; item: Variant2 }
  | { show: boolean; item: Variant3 }
)[];

// variant 1 --> tiles
export type Variant1 = {
  id: string;
  attributes: {
    type: "variant1";
    title: string;
    tile: NavItem;
    subTiles: { data: [SubTile, SubTile, SubTile] };
  };
};

// variant 2 --> group of links
export type Variant2 = {
  id: string;
  attributes: {
    type: "variant2";
    title: string;
    components: { data: SubTile[] };
  };
};

// variant 3 --> link
export type Variant3 = {
  id: string;
  attributes: {
    type: "variant3";
    title: string;
    href: string;
  };
};

//brand logo component
export type BrandLogo = {
  data: { attributes: { logoText: string; } }
};

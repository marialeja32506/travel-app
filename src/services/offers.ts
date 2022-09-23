import axios from "axios";
import { useQuery, UseQueryResult } from "react-query";

const GET_OFFERS_ENDPOINT = "https://hotels4.p.rapidapi.com/properties/list";

const offersKeys = {
  all: ["data"] as const,
  lists: () => [...offersKeys.all, "list"] as const,
  detail: (destinationId: string) =>
    [...offersKeys.lists(), destinationId] as const,
};

type offersResultAttr = {
  data: {
    body: {
      header: string;
      query: {
        destination: {
          id: number;
        };
      };
      searchResults: {
        results: [
          {
            id: number;
            guestReviews: {
              rating: string;
              total: number;
            };
            name: string;
            address: {
              locality: string;
            };
            optimizedThumbUrls: {
              srpDesktop: string;
            };
            ratePlan: {
              price: {
                current: string;
              };
            };
          }
        ];
        totalCount: number;
      };
    };
  };
};

const useGetOffersResult = (
  destinationId: number,
  pageNumber: number,
  pageSize: number,
  checkIn: string,
  checkOut: string,
  adults1: number
): UseQueryResult<offersResultAttr> => {
  return useQuery(offersKeys.lists(), async () => {
    const response = await axios.get<offersResultAttr>(
      `${GET_OFFERS_ENDPOINT}?destinationId=${destinationId}&pageNumber=${pageNumber}&pageSize=${pageSize}&checkIn=${checkIn}&checkOut=${checkOut}&adults1=${adults1}`,
      {
        headers: {
          "X-RapidAPI-Key":
            "eaf08ca640mshc3061bfeb3d9c7dp1abae6jsna40a7e591c08",
          "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
        },
      }
    );

    return response.data;
  });
};

export { useGetOffersResult, offersKeys };

export type { offersResultAttr };

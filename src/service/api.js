import { apis } from "service";

export const get20230109 = (payload) =>
  apis.get(
    `https://api.polygon.io/v2/aggs/ticker/C${payload?.path?.EURUSD}/range/1/day/2023-01-09/2023-01-09`,
    {
      ...payload,
      params: {
        adjusted: "true",
        sort: "asc",
        limit: "120",
        apiKey: "cKTXfMOkxBfpOyxL6Em75N0Po4dUxrqq",
        ...payload?.params,
      },
    }
  );

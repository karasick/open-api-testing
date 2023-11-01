import axios, { AxiosHeaders } from "axios";

export class ApiHttpClient {
  apiUrl: string;

  constructor(baseUrl: string) {
    this.apiUrl = baseUrl;
  }

  async get(path: string) {
    const url = new URL(this.apiUrl + path);
    console.log(url.toString());
    const headers = new AxiosHeaders();
    const token =
      "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjOGZkM2M2NC1lNDM5LTQzN2ItOThiMS1kMWU3Yjk3OTI4MGIiLCJleHAiOjE2NzEwMzI3NDYsImlhdCI6MTY3MTAyOTE0NiwiaXNzIjoiaHR0cHM6Ly9hdXRoLmRldm1hLmNhcmJtZWUuY29tIiwic3ViIjoiODVlYWUwNTgtNjM4OC00OGVmLWIzNzctYTEyMTQ3NWRlNjM4IiwianRpIjoiYWU2YTU4YmMtZGQ0Zi00OGY4LWE2NGQtNTA5MGJjMDIzZTE5IiwiYXV0aGVudGljYXRpb25UeXBlIjoiUkVGUkVTSF9UT0tFTiIsImVtYWlsIjoib2xla3NpaWtoYXJjaGVua29AY2FyYm1lZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicm9sZXMiOltdLCJhcHBsaWNhdGlvbklkIjoiYzhmZDNjNjQtZTQzOS00MzdiLTk4YjEtZDFlN2I5NzkyODBiIiwidGlkIjoiZGIzMmU4MGYtZTAxYy00MDEyLThlNjMtMWIzZmM1NDE4YWQzIn0.PvKXmnSh6OzFsfawhrRtaIAlnW4arw0__NLZY_RLz82n-QoiC82jTiCVaz-YD-x8TImRYwvByOHdrF5a8Z08Rg";
    headers.set("Authorization", `Bearer ${token}`);

    const result = await axios.get(url.toString(), {
      headers,
    });
    return result;
  }
}

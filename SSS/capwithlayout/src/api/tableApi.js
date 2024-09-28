import axios from "axios";

const fncGetResult = async function () {
  return [
    {
      name: "abc",
      no: 1,
      key: "dtesv3d32k-111",
      email: "dtesv3d32k-111@auo.com",
    },
    {
      name: "efg",
      no: 2,
      key: "d3esv3d2k2-157",
      email: "d3esv3d2k2-157@auo.com",
    },
    {
      name: "aaa",
      no: 3,
      key: "d3esv3d2k2-aa",
      email: "d3esv3d2k2-aa@auo.com",
    },
    {
      name: "bbb",
      no: 4,
      key: "d3esv3d2k2-bb",
      email: "d3esv3d2k2-bb@auo.com",
    },
    {
      name: "ccc",
      no: 5,
      key: "d3esv3d2k2-cc",
      email: "d3esv3d2k2-cc@auo.com",
    },
    {
      name: "ddd",
      no: 6,
      key: "d3esv3d2k2-dd",
      email: "d3esv3d2k2-dd@auo.com",
    },
    {
      name: "eee",
      no: 7,
      key: "d3esv3d2k2-ee",
      email: "d3esv3d2k2-ee@auo.com",
    },
  ];
  const response = await axios.get(`${base_url}/${user_id}`);
  return response.data;
};

export { fncGetResult };

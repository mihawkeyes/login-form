import axios from "api/index";
import { Buffer } from "buffer";

const USERMANAGEMENTURL = "/usermanagement";

export const Login = async (username: string, password: string) => {
  const token = Buffer.from(`${username}:${password}`, "utf8").toString(
    "base64"
  );

  const {data} = await axios.get(`${USERMANAGEMENTURL}/login`, {
    headers: {
      Authorization: `Basic ${token}`,
    },
  });
  console.log(data);
};

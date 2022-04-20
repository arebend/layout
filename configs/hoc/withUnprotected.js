/* eslint-disable react/display-name */
import { useUser } from "../context/user";
import { useRouter } from "next/router";

const withUnprotected = (Pages) => {
  return (props) => {
    const user = useUser();
    const { uid } = user;
    const router = useRouter();

    console.log('uid:', uid)
    if (uid) {
      router.replace("/layout")
      return <></>
    }
    return <Pages {...props} />
  }
}

export default withUnprotected

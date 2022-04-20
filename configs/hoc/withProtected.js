/* eslint-disable react/display-name */
import { useUser } from "../context/user";
import { useRouter } from "next/router";

const withProtected = (Pages) => {
  return (props) => {
    const user = useUser();
    const { uid } = user;
    const router = useRouter();

    console.log('uid:',uid)
    if(!uid) {
        router.replace("/")
        return <></>
    }
    return <Pages {...props} />
  }
}

export default withProtected

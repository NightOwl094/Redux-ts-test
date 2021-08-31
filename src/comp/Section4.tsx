import {useSelector} from "react-redux";
import {RootState} from "../store/Store";

// store update received
const Section4 = () => {
    const users = useSelector((state: RootState) => state.users)

    return (
        <div>{users}</div>
    )
}

export default Section4

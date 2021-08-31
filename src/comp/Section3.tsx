import {useDispatch} from "react-redux";
import {addUser, removeLastUser} from "../features/user/UserSlice";

// store data update
const Section3 = () => {
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(addUser("user"))}>add user</button>
            <button onClick={() => dispatch(removeLastUser())}>remove user</button>
        </div>
    )
}

export default Section3

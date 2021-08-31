import {useSelector} from "react-redux";
import {RootState} from "../store/Store";

// store update received
const Section2 = () => {
    const coffeeList = useSelector((state: RootState) => state.coffees)

    return (
        <div>
            {coffeeList}
        </div>
    )
}

export default Section2

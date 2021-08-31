import {useDispatch} from "react-redux";
import {addCoffee, removeLastCoffee} from "../features/coffee/CoffeeSlice";

// store data update
const Section1 = () => {
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(addCoffee("americano"))}>add coffee</button>
            <button onClick={() => dispatch(removeLastCoffee())}>remove coffee</button>
        </div>
    )
}

export default Section1

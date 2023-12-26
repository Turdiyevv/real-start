import {useSelector} from "react-redux";
import {useCallback} from "react";

const ValidationError = () => {
    const {error} = useSelector(state => state.auth);
    const errorMessage = useCallback(() => {
        return Object.keys(error).map(name => {
            const msg = error[name].join(',')
            return `${name} ${msg}`
        })
    }, [error])

    console.log(error !== null && errorMessage())
    return error !== null && <div>ValidationError</div>
}

export default ValidationError;
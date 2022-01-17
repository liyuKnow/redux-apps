import { updateStart, updateSuccess, updateError } from "./userSlice";
import axios from "axios";

export const updateUser = (user) => async (dispatch) => {
    dispatch(updateStart());
    try {
        const res = await axios.post(`http://localhost:3333/api/users/:id/update`, user)
        dispatch(updateSuccess(res.data));
        console.log(res.data);
    } catch (error) {
        dispatch(updateError());
    }
}
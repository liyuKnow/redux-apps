import { updateStart, updateSuccess, updateError } from "../../redux/userSlice";

export const updateUser = (user) => async (dispatch) => {
    dispatch(updateStart());
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        const data = await response.json();
        dispatch(updateSuccess(data));
    } catch (error) {
        dispatch(updateError());
    }
}
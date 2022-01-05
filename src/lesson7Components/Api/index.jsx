import { toast } from 'react-toastify';
class Api {
    static apiUrl = process.env.REACT_APP_BACKEND_URL
    static showErrorMessage(message) {
        toast.error(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    static getRequest = (route) => {
        const { apiUrl, showErrorMessage } = Api;
        return fetch(`${apiUrl}/${route}`)
            .then(response => response.json())
            .then(data => {
                if (!Object.keys(data ?? {}).length)
                    throw new Error("We have an Error in the Request!Please try again");
                return data;
            })
            .catch(err => {
                showErrorMessage(err);
            })
    }
}

export default Api;
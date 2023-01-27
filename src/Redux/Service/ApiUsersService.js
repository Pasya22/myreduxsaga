import axios from "../../Config/http-common";

const getAll = async () => {
    try {
        const hasil = await axios.get('/users');
        console.log(hasil)
        return hasil;
    } catch (error) {
        return error.message;
    }
};

const gets = async (id) => {
    try {
        const hasil = await axios.get(`/users/${id}`);
        return hasil;
    } catch (error) {
        return error.message;
    }
};

const create = async (data) => {
    console.log(data)
    const hasil = await axios.post('/users/save', data.user);
    return hasil
}

const update = async (id, data) => {
    const hasil = await axios.put(`/users/edit/${id}`, data.user);
    return hasil
}
const remove = async (id) => {
    const hasil = await axios.delete(`/users/delete/${id}`);
    return hasil
}

const ApiService = {
    getAll,
    gets,
    create,
    update,
    remove
}

export default ApiService;
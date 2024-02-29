import { fetchData } from "./api";


export const fetchFlights = async () => {
    return await fetchData(`/flights`);
};

export const fetchFlightDetails = async (id) => {
    return await fetchData(`/flights/${id}`);
};
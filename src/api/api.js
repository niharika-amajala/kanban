import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.quicksell.co/v1/internal/frontend-assignment',
});

export const fetchTickets = async () => {
  try {
    const response = await api.get();
    return response.data;
  } catch (error) {
    // Handle the error
    console.error("Error fetching tickets: ", error);
    return null;
  }
};

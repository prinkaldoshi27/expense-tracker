import axios from "axios";

export default axios.create({
    baseURL: 'https://tag-expense-tracker.vercel.app/api'
});
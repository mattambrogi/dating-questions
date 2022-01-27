import axios from 'axios';

export default class APIService {

    static GetQuestions() {
        axios.get('http://127.0.0.1:8000/api/')
    }


}
import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-8e8e0.firebaseio.com/'
})
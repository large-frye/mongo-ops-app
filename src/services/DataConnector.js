import axios from 'axios';

export default class DataConnector {
  static add(data) {
    axios.post('', data).then((response) => {

    });
  }
}
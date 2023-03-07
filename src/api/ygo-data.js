import axios from "axios";
import { BASE_URL } from "../config";
import { FAKE_INFO_CARD } from "./fake-ygo-data";

export class YGOCardGameAPI {

  static async fetchFakeCard() {
    return FAKE_INFO_CARD;
  }

  static async fetchRandomCard() {
    try {
      const response = await axios.get(`${BASE_URL}randomcard.php`);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  static async fetchByCardName(name) {
    try {
      const response = await axios.get(`${BASE_URL}cardinfo.php?fname=${name}`);
      console.log(response.data);
      return response.data.data;
    } catch (e) {
      console.log(e);
    }
  }
 
  static async fetchTopViewRanking() {
    try {
      const currentDate = new Date().toLocaleDateString("en-US");
      const startDate = new Date(
        new Date().getTime() - 1000 * 60 * 60 * 24 * 30
      ).toLocaleDateString("en-US");
      const response = await axios.get(
        `${BASE_URL}cardinfo.php?sort=views&misc=yes&startdate=${startDate}&enddate=${currentDate}`
      );
      return response.data.data;
    } catch (e) {
      console.log(e);
    }
  }
}

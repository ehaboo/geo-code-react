import axios from "axios";
import CoordinatesModel from "../Models/CoordinatsModel";
import appConfig from "../Utils/Config";

class LocationServices {
  public async getCoordinats(address: string): Promise<CoordinatesModel> {
    const response = await axios.get<CoordinatesModel>(
      `${appConfig.apiUrl}/coordinates?address=${address}`
    );
    const coordinates = response.data;
    return coordinates;
  }

  public async getPopularSearch(): Promise<CoordinatesModel> {
    const response = await axios.get<CoordinatesModel>(
      `${appConfig.apiUrl}/popular-search`
    );
    const popularSearch = response.data;
    return popularSearch;
  }

  public async getPopularSearchList(): Promise<CoordinatesModel[]> {
    const response = await axios.get<CoordinatesModel[]>(
      `${appConfig.apiUrl}/popular-search-list`
    );
    const popularSearchList = response.data;
    return popularSearchList;
  }
}

const locationServices = new LocationServices();
export default locationServices;

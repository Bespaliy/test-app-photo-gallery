import HttpService from "./http.service";
import { AxiosResponse } from "axios";
import { env } from "../config/env";
import { createPhotoModel } from "../models/photo.model";
import { IPhoto } from "../common/types/photo.type";

class PhotoService extends HttpService {
  constructor() {
    super(env.HOST, env.CLIENT_ID);
  }

  async getAllPhoto() {
    let params = {};
    const url = { url: "photos", params };
    const { data }: AxiosResponse<IPhoto[]> = await this.getAll(url);
    const photo = data.map((photo) => createPhotoModel(photo));
    return photo;
  }

  async getById(id: string) {
    const url = { url: `photos/${id}` };
    const { data }: AxiosResponse<IPhoto> = await this.get(url);
    const photo = createPhotoModel(data);
    return photo;
  }

}

const photoService = new PhotoService();
export default photoService;

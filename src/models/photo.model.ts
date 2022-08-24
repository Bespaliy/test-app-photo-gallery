import { IPhoto } from "../common/types/photo.type";

class PhotoModel {
  id: string;
  description: string
  alt_description: string
  author: string
  urls: {
    raw: string
    regular: string
    small: string
    small_s3: string
    thumb: string
    full: string
  } 

  constructor(photo: IPhoto) {
    this.id = photo.id;
    this.description = photo.description || "Not title";
    this.alt_description = photo.alt_description || "Not description";
    this.author = photo.user.name;
    this.urls = photo.urls;
  }
};

const createPhotoModel = (photo: IPhoto) => {
  return new PhotoModel(photo);
};

export { createPhotoModel };

export default PhotoModel;

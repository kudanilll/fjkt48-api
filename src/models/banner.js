export class BannerHomeModel {
  constructor({ _id, image, url }) {
    this._id = _id;
    this.image = image;
    this.url = url;
  }

  toObject() {
    return {
      _id: this._id,
      image: this.image,
      url: this.url,
    };
  }
}

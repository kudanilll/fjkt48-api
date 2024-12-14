class TraineeModel {
  constructor({ _id, nickname, image, jikoshoukai, biodata, links }) {
    this._id = _id;
    this.nickname = nickname;
    this.gen = "trainee";
    this.image = image;
    this.jikoshoukai = jikoshoukai;
    this.biodata = {
      name: biodata.name,
      birthday: biodata.birthday,
      height: biodata.height,
      horoscope: biodata.horoscope,
      blood_group: biodata.blood_group,
    };
    this.links = {
      instagram: links.instagram,
      twitter: links.twitter,
      titktok: links.titktok,
      // thread: links.thread,
      idn: links.idn,
      showroom: links.showroom,
    };
  }

  toObject() {
    return {
      _id: this._id,
      nickname: this.nickname,
      gen: "trainee",
      image: this.image,
      jikoshoukai: this.jikoshoukai,
      biodata: this.biodata,
      links: this.links,
    };
  }
}

export default TraineeModel;

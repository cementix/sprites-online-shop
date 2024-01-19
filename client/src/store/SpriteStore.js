import { makeAutoObservable } from "mobx";

export default class SpriteStore {
  constructor() {
    this._categories = [
      {
        id: 1,
        name: "Effects",
      },
      {
        id: 2,
        name: "Characters",
      },
    ];
    this._sprites = [
      {
        id: 1,
        name: "Fireball",
        price: 5,
        rating: 0,
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.artstation.com%2Fartwork%2FblBQVn&psig=AOvVaw1S_9WqgAm4WPc42kcs5ZOQ&ust=1705778503249000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJic7qCW6oMDFQAAAAAdAAAAABAW",
        categoryId: 1,
      },
      {
        id: 2,
        name: "Vladislav",
        price: 9,
        rating: 0,
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fuinp.gov.ua%2Fistorychnyy-kalendar%2Fcherven%2F420%2F1863-narodyvsya-vladyslav-gorodeckyy-arhitektor&psig=AOvVaw2PkgpTyrbl-yuMdWalm4pK&ust=1705778551856000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCICN_rmW6oMDFQAAAAAdAAAAABAI",
        categoryId: 2,
      },
    ];
    this._selectedCategory = {};
    makeAutoObservable(this);
  }

  setCategory(categories) {
    this._categories = categories;
  }

  setSprites(sprites) {
    this._sprites = sprites;
  }

  setSelectedCategory(category) {
    this._selectedCategory = category;
  }

  get categories() {
    return this._categories;
  }

  get sprites() {
    return this._sprites;
  }

  get selectedCategory() {
    return this._selectedCategory;
  }
}

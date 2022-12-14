export default class Movie {
  static lastId: number = 0;

  id: number;
  title: string;
  description?: string;
  watchedOn?: Date;
  watched: boolean;

  constructor(
    title: string,
    description?: string,
    watchedOn?: Date,
    watched: boolean = false
  ) {
    this.id = 0;
    this.title = title;
    this.description = description;
    this.watchedOn = watchedOn;
    this.watched = watched;
  }

  static updateLastId(): number {
    return ++this.lastId;
  }
}

export default interface Movie {
  //static lastId: number = 4;

  id: number;
  title: string;
  description?: string;
  dueDate: Date;
  watched: boolean;
}

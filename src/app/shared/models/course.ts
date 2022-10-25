import { Student } from "./student";

export interface Course {
  id: number;
  name: string;
  description: string;
  students: Student[];
}

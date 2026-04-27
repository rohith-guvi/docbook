import { Model, Schema, model, models } from "mongoose";

export interface CourseDocument {
  title: string;
  createdAt: Date;
  updatedAt: Date;
}

const courseSchema = new Schema<CourseDocument>(
  {
    title: { type: String, required: true, trim: true }
  },
  {
    timestamps: true
  }
);

const Course: Model<CourseDocument> = models.Course || model<CourseDocument>("Course", courseSchema);

export default Course;

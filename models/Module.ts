import { Model, Schema, Types, model, models } from "mongoose";

export interface ModuleDocument {
  title: string;
  courseId: Types.ObjectId;
  slug: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const moduleSchema = new Schema<ModuleDocument>(
  {
    title: { type: String, required: true, trim: true },
    courseId: { type: Schema.Types.ObjectId, ref: "Course", required: true, index: true },
    slug: { type: String, required: true, unique: true, trim: true, lowercase: true },
    order: { type: Number, default: 0 }
  },
  { timestamps: true }
);

moduleSchema.index({ courseId: 1, order: 1 });

const ModuleModel: Model<ModuleDocument> = models.Module || model<ModuleDocument>("Module", moduleSchema);

export default ModuleModel;

import { z } from "zod"

export const CreateChoiceSchema = z.object({
  // Should this be number?
  questionId: z.number(),
  text: z.string(),
  vote: z.number(),
  id: z.string(),
  // template: __fieldName__: z.__zodType__(),
})
export const UpdateChoiceSchema = CreateChoiceSchema.merge(
  z.object({
    id: z.number(),
    questionId: z.number(),
  })
)

export const DeleteChoiceSchema = z.object({
  id: z.number(),
})

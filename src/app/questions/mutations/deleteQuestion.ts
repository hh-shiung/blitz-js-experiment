import { resolver } from "@blitzjs/rpc"
import db from "db"
import { DeleteQuestionSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(DeleteQuestionSchema),
  resolver.authorize(),
  async ({ id }) => {
    await db.choice.deleteMany({ where: { questionId: id } })
    const question = await db.question.deleteMany({ where: { id } })

    return question
  }
)

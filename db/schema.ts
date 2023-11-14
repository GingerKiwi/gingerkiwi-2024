import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';;

export const likes = sqliteTable('likes', {
    slug: text('slug'),
    likes: integer('likes').default(0),
});
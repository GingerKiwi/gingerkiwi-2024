import type { APIContext } from "astro";
import { db, likes } from "../../../db";
import { eq } from 'drizzle-orm';

export const prerender = false;

export async function GET(context: APIContext) {
    const { slug } = context.params;

    if (!slug) {
        return new Response ('Bad Request', { status: 400 });
        }   

        const entry = db.select().from(likes).where(eq(likes.slug, slug)).get();
        
        if(!entry) {
            return new Response('Not Found', { status: 404 });
        }

    return new Response(JSON.stringify(entry), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
});

}

export async function POST() {}

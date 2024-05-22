import { NextResponse } from "next/server";
async function POST(req) {
    const data = await req.json();
    return NextResponse.json(data);
}

export { POST };

import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request, { params }) => {
  const { id } = await params;

  try {
    await connect();
    const post = await Post.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = await params;

  try {
    await connect();
    await Post.findByIdAndDelete(id);

    return new NextResponse("Post deleted", { status: 200 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};

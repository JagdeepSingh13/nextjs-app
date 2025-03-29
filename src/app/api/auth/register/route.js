import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  const { name, email, password } = await request.json();
  if (!name || !email || !password) {
    return new NextResponse("Missing required fields", { status: 400 });
  }

  await connect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();

    return new NextResponse("User created", { status: 201 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};

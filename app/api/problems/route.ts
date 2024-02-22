import connect from "@/utlis/db";
import { NextRequest, NextResponse } from "next/server";
import QuestionModel from "@/models/qustionsSchema";
import { Questions } from "@/interfaces";
import { HttpStatusCode } from "axios";


export async function POST(req: NextRequest) {
  try {
    await connect();
    const body: Questions = await req.json();
    if (body.title && body.points && body.category && body.flag && body.description) {
      const product = await QuestionModel.create(body);
      return NextResponse.json(
        { success:true, message: "Your qustion has been created" },
        { status: HttpStatusCode.Created }
      );
    }
    return NextResponse.json(
      { message: "Something is missing!" },
      { status: HttpStatusCode.BadRequest }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: HttpStatusCode.BadRequest }
    );
  }
}
export async function GET(request:NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const qpage = parseInt(searchParams.get("page") ?? "1", 10);
  const page:number = qpage;
  const limit = 6;
  const startIndex = (page - 1) * limit;
  try {
    await connect();
    const questions = await QuestionModel.find().skip(startIndex).limit(limit);
    return NextResponse.json({ data: questions });
  } catch (error) {
    return NextResponse.json({ error });
  }
}

import { NextRequest, NextResponse } from "next/server";
import connect from "@/utlis/db";
import QuestionModel from "@/models/qustionsSchema";
import { HttpStatusCode } from "axios";



export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connect();
    const qustion = await QuestionModel.findById(params.id);
    qustion.flag = undefined;
    if (qustion) {
      return NextResponse.json({ qustion });
    }
    return NextResponse.json(
      { message: `Product ${params.id} not found` },
      { status: HttpStatusCode.NotFound }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: HttpStatusCode.BadRequest }
    );
  }
}




export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connect();
    const body: { flag: string } = await req.json();
    const qustion = await QuestionModel.findById(params.id);
    if(body.flag == qustion.flag){
      
      return NextResponse.json(
        { success: true, message: "Your Flag Is Right!" },
        { status: HttpStatusCode.Created }
      );
      
    }

  } catch (error) {}
}
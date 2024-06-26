import { db } from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(req:Request){

    const session = await getServerSession(authOptions);


    if(!session){
        return NextResponse.json({
            message: "You need to be logged in to report a post"
        },
        {
            status: 401
        })
    }

    const { postId, reason } = await req.json();

    if(!postId || !reason){
        return NextResponse.json({
            message: "Please dont leave any fields empty"
        },
        {
            status: 400
        })
    }
    
    if(session?.user){
        const existingReport = await db.report.findFirst({
            where:{
                userId: session.user.id,
                postId,
            }
        });

        if(existingReport){
            return NextResponse.json({
                message: "You have already reported this post"
            },
            {
                status: 400
            })
        }
    }

    try{
        if(session?.user){
            await db.report.create({
                data:{
                    userId: session.user.id,
                    postId,
                    reason,
                },
            });
        }

        return NextResponse.json({
            message: "Report submitted successfully"
        })
    }
    catch(error){
        console.error(error);
        return NextResponse.error();
    }
}
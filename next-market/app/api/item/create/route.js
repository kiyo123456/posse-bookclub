import { NextResponse } from "next/server"
import supabase from "@/app/utils/database"

export async function POST(request) {
    const reqBody = await request.json()
    console.log(reqBody)
    try {
        const { error } = await supabase.from("items").insert(reqBody)
        if (error) throw new Error(error.message)
        return NextResponse.json({message: "アイテム作成成功"})
    } catch(err) {
        return NextResponse.json({message: `アイテム作成失敗: ${err}`})
    }
}

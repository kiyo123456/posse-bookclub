import supabase from "@/app/utils/database";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const { data } = await supabase.from('items').select()
        return NextResponse.json({message: "アイテム読み取り成功（オール）", allItems: data})
    } catch(err) {
        return NextResponse.json({message: `アイテム読み取り成功（オール）: ${err}`})
    }
}
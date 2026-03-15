import supabase from "@/app/utils/database";
import { NextResponse } from "next/server";

export async function DELETE(request,context) {
    const params = await context.params
    try {
        const {error} = await supabase.from('items').delete().eq("id", params.id)
        if (error) throw new Error(error.message)
        return NextResponse.json({message: "hoge"})
    } catch(err) {
        return NextResponse.json({message: `${err}`})
    }
}
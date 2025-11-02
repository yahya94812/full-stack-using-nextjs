export default async function Page(){
    const res = await fetch("http://localhost:3000/api/apiusage", {cache: "no-store"}); //here we can use any other apis as well
    const data = await res.json();
    return(
        <div>
            message: {data.message}
        </div>
    )
}


// Option B: Import logic directly (recommended for internal calls)
// If your API route just calls a function, import that function directly instead of calling your own endpoint:

// // app/api/db/route.ts
// import { NextResponse } from "next/server";
// import { getDataFromDB } from "@/lib/db";
// export async function GET() {
//   const data = await getDataFromDB();
//   return NextResponse.json(data);
// }

// // app/page.tsx
// import { getDataFromDB } from "@/lib/db";
// export default async function Page() {
//   const data = await getDataFromDB();
//   return <pre>{JSON.stringify(data, null, 2)}</pre>;
// }

// This avoids unnecessary HTTP overhead.
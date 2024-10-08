import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../../prisma/db";

export const DELETE = async (
  _: NextRequest,
  { params: { id } }: { params: { id: string } }
) => {
  const session = await getServerSession();

  try {
    if (!session) {
      return new NextResponse("Your not logged in", {
        status: 401,
      });
    }

    console.log("[YES WE ARE HERE IN DELETE]");

    const user = await prisma.user.findUnique({
      where: {
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        email: session.user?.email!,
      },
    });

    if (!user) return new NextResponse("User not found", { status: 404 });

    const report = await prisma.report.delete({
      where: {
        id: id,
      },
    });

    if (!report)
      return new NextResponse(
        "Either report doesn't exists or You don't have permission to delete this report",
        { status: 401 }
      );

    return new NextResponse(JSON.stringify(report), {
      status: 200,
    });
  } catch (error) {
    console.log("[REPORT DELETION ERROR]", error);
    return new NextResponse("Internal server error", {
      status: 500,
    });
  }
};

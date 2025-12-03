import { getServerSession } from "next-auth";
import authOptions from "@/lib/authOptions";
import EditUserProfileForm from "@/components/EditUserProfileForm";
import { redirect } from "next/navigation";
import { prisma } from '@/lib/prisma';

export default async function EditProfilePage() {
  // Get the current logged-in session
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect("/auth/signin");
  }

  // Fetch the user from the database (using Prisma)
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      dietaryRestrictions: true,
      password: true,
      role: true,
    },
  });

  if (!user) {
    redirect("/auth/signin"); // user not found, redirect to login
  }

  return (
    <main className="container py-4">
      <EditUserProfileForm user={user} />
    </main>
  );
}

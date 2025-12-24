import DoctorProfileContent from "@/components/modules/DoctorDetails/DoctorProfileContent";
import DoctorReviews from "@/components/modules/DoctorDetails/DoctorReviews";
import { getDoctorById } from "@/services/admin/doctorManagement";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doctor Details - PH Doc",
  description: "Details page of doctor profile",
};

export const revalidate = 600;

const DoctorDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const result = await getDoctorById(id);
  return (
    <div className="w-full bg-blue-50">
      <div className="container mx-auto py-8 space-y-6">
        <DoctorProfileContent doctor={result.data} />
        <DoctorReviews doctorId={id} />
      </div>
    </div>
  );
};

export default DoctorDetailPage;

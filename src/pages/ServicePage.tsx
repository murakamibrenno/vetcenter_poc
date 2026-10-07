import { Navigate, useParams } from "react-router-dom";
import { ServiceHero, ServiceBody } from "@/components/sections/ServicePageContent";
import { getService } from "@/lib/services";

export function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getService(slug) : undefined;

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <ServiceHero service={service} />
      <ServiceBody service={service} />
    </>
  );
}

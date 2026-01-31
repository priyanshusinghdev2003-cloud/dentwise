import Navbar from "@/components/Navbar";

function page() {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
        {/* header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Book an Appointment</h1>
          <p className="text-muted-foreground">
            Find and book with verified dentists in your area
          </p>
        </div>
      </div>
    </>
  );
}

export default page;

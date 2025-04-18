const BookingForm = () => {
  return (
    <section className="section__container mt-1 relative z-10"> {/* Added margin-top to push it lower */}
      <form className="bg-white shadow-lg rounded-lg p-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="flex items-center gap-4">
          <span><i className="ri-calendar-2-fill text-[var(--primary-color)]"></i></span>
          <div>
            <label className="block text-sm font-medium mb-1">CHECK-IN</label>
            <input type="date" className="border p-2 w-full rounded" />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <span><i className="ri-calendar-2-fill text-[var(--primary-color)]"></i></span>
          <div>
            <label className="block text-sm font-medium mb-1">CHECK-OUT</label>
            <input type="date" className="border p-2 w-full rounded" />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <span><i className="ri-user-fill text-[var(--primary-color)]"></i></span>
          <div>
            <label className="block text-sm font-medium mb-1">GUESTS</label>
            <input type="number" className="border p-2 w-full rounded" placeholder="Number of guests" />
          </div>
        </div>
        
        <button className="btn h-full">CHECK AVAILABILITY</button>
      </form>
    </section>
  );
};

export default BookingForm;

import  photos  from "../data/photos";

const DetailsPage = () => {
  return (
    <div className="p-6 mt-20 max-w-5xl mx-auto bg-gradient-to-br from-blue-500 to-white">
      <h2 className="text-2xl font-semibold mb-4 text-center">Photo Details</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse border border-gray-300">
          <thead className="bg-blue-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Photo</th>
              <th className="border border-gray-300 px-4 py-2">Details Screenshot</th>
              <th className="border border-gray-300 px-4 py-2">Location</th>
            </tr>
          </thead>
          <tbody>
            {photos.map((p, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="border px-4 py-2">
                  <img src={p.src} alt="pic" className="h-20 w-20 object-cover rounded-md" />
                </td>
                <td className="border px-4 py-2">
                  <img src={p.details} alt="details" className="h-20 w-20 object-cover rounded-md" />
                </td>
                <td className="border px-4 py-2"> <a
    href={p.location}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    view on map
  </a>
  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailsPage;

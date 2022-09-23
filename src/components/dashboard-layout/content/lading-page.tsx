import { BsFillMoonFill, BsFillTagFill } from "react-icons/bs";

import { useGetOffersResult } from "../../../services/offers";

const LadingPage = () => {
  const destinationId = 1447930;
  const checkIn = "2021-12-23";
  const checkOut = "2021-12-26";
  const adults1 = 2;
  const pageNumber = 1;
  const pageSize = 1;

  const { data } = useGetOffersResult(
    destinationId,
    pageNumber,
    pageSize,
    checkIn,
    checkOut,
    adults1
  );

  return (
    <section className="p-6 w-full bg-gray-200 h-195">
      <article>
        <span className="text-sm font-rounded text-gray-400  mt-4">
          {data?.data.body.searchResults.totalCount}
        </span>
        <br />
        <span className="text-primaryBlue font-rounded font-semibold mb-4">
          {data?.data.body.header}
        </span>
      </article>

      <article className=" w-7/12 h-60 mt-3 space-y-3">
        {data?.data.body.searchResults.results.map((item: any) => (
          <div key={item.id} className=" grid grid-cols-12">
            <div className="col-span-4 h-full rounded-l-md bg-white">
              <img
                alt="aleja"
                src={item.optimizedThumbUrls.srpDesktop}
                className="h-full rounded-l-md "
              />
            </div>
            <div className="h-full col-span-8 rounded-r-md bg-white p-3">
              <div className="mb-7">
                <h1 className="text-primaryBlue text-xl font-rounded font-semibold">
                  {item.name}
                </h1>
                <span className="text-sm font-rounded text-gray-400  mt-4 pb-10">
                  {item.address.locality}
                </span>
              </div>
              <br />
              <span className="text-sm text-green-500">
                Totalmente reembolsable
              </span>
              <div className="flex justify-between">
                <div>
                  <div className="flex">
                    <span className="text-purple-700 px-1">
                      <BsFillMoonFill />
                    </span>
                    <span className="text-sm font-rounded text-gray-400">
                      {" "}
                      Acumula sellos
                    </span>
                  </div>

                  <div className="mt-2">
                    <span className="text-sm font-rounded font-semibold ">
                      {item.guestReviews.rating}/10
                    </span>
                    <span className="text-sm font-rounded  ">
                      ({item.guestReviews.total} opiniones)
                    </span>
                  </div>
                </div>

                <article>
                  <span className="px-2.5 py-1 h-8 items-center text-xs rounded-md space-x-1 bg-purple-700 flex text-center font-medium text-white">
                    <BsFillTagFill size={18} />
                    Precio secreto disponible
                  </span>
                  <span className="font-rounded text-primaryBlue text-2xl font-bold flex justify-end">
                    COP {item.ratePlan.price.current}
                  </span>

                  <span className="text-xs font-rounded text-gray-400 flex justify-end">
                    {/* este dato no lo devuelve el servicio */}
                    COP $ 144 en total
                  </span>
                </article>
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default LadingPage;

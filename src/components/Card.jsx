const Card = () => {
  return (
    <article className="w-[19rem] bg-veryPaleBlue rounded-xl overflow-hidden shadow-xl">
      <div>
        <img
          src="images/illustration-hero.svg"
          alt="hero"
          className="object-cover"
        />
      </div>

      <section className="flex flex-col justify-center items-center my-7">
        <h1 className="font-black text-darkBlue text-2xl">Order Summary</h1>

        <p className="text-desaturatedBlue text-center w-[16rem] my-3 text-sm">
          You can now listen to millions of songs, audiobooks, and podcast on
          any device anywhere you like!
        </p>

        <div className="flex gap-6 justify-center items-center bg-paleBlue2 rounded-md">
          <div className="flex justify-center items-center gap-4 p-4">
            <div>
              <img
                src="images/icon-music.svg"
                alt="icon music"
                className="w-9"
              />
            </div>

            <div>
              <h3 className="font-bold text-darkBlue">Annual Plan</h3>
              <span className="text-desaturatedBlue font-semibold">$59.99/year</span>
            </div>
          </div>

          <div className="px-4">
            <span>
              <a href="#" className="text-brightBlue font-semibold underline text-xs hover:text-brightBlue2 hover:no-underline">Change</a>
            </span>
          </div>
        </div>

        <button className="bg-brightBlue px-14 py-[.4rem] rounded-lg my-3 text-veryPaleBlue font-bold text-sm shadow-lg hover:bg-brightBlue2 transition-all">Proceed to Payment</button>

        <p className="text-desaturatedBlue font-bold text-sm cursor-pointer">Cancel Order</p>
      </section>
    </article>
  );
};

export default Card;

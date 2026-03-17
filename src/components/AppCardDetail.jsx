import { useLoaderData, useParams } from 'react-router';
import iconDownloads from '../assets/icon-downloads.png';
import iconRatings from '../assets/icon-ratings.png';
import iconReview from '../assets/icon-review.png';
import { ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { BarChart, Bar } from 'recharts';
import { useState } from 'react';
import { setAppToLS } from '../utilities/localStorage';

const AppCardDetail = () => {
  const [isInstalled, setIsInstalled] = useState(false);
  const loadedAllData = useLoaderData();
  //   console.log(loadedAllData);
  const { cardId } = useParams();
  //   console.log(typeof cardId);
  const allCardsData = loadedAllData.data;
  //   console.log(allCardsData);
  const singleCardData = allCardsData.find(
    (item) => item.id === Number(cardId)
  );
  //   console.log(singleCardData);
  const {
    id,
    title,
    image,
    companyName,
    size,
    downloads,
    ratingAvg,
    reviews,
    ratings,
    description,
  } = singleCardData;

  const sortedRatings = [...ratings].sort(
    (a, b) => parseInt(b.name) - parseInt(a.name)
  );

  const handleInstallBtn = (id) => {
    // store app with id
    // store that app id inside a array collection
    // if app id already exist then show a alert
    // if not exist then push that app id into a array collection
    console.log(id);
    setAppToLS(id);
    setIsInstalled(true);
  };

  return (
    <div className="bg-base-100">
      <div className="w-11/12 max-w-7xl mx-auto">
        {/* hero section */}
        <section className="hero">
          <div className="hero-content flex-col lg:flex-row gap-8 lg:gap-16">
            <div className="w-full">
              <img src={image} className="w-full object-cover" />
            </div>
            <div className="space-y-6">
              {/* info */}
              <div>
                <h1 className="text-2xl font-bold mb-2">{title}</h1>
                <p className="text-md font-medium">
                  Developed By :
                  <span className="text-primary"> {companyName}</span>
                </p>
                <hr className="border-t border-gray-300 mt-2" />
              </div>
              {/* stat */}
              <div className="stats stats-vertical sm:stats-horizontal shadow">
                <div className="stat flex flex-col items-start">
                  <div className="stat-figure self-start mb-2">
                    <img className="w-6" src={iconDownloads} />
                  </div>
                  <div className="stat-title">Downloads</div>
                  <div className="stat-value">{downloads}M</div>
                </div>

                <div className="stat flex flex-col items-start">
                  <div className="stat-figure self-start mb-2">
                    <img className="w-6" src={iconRatings} />
                  </div>
                  <div className="stat-title">Average Ratings</div>
                  <div className="stat-value">{ratingAvg}</div>
                </div>

                <div className="stat flex flex-col items-start">
                  <div className="stat-figure self-start mb-2">
                    <img className="w-6" src={iconReview} />
                  </div>
                  <div className="stat-title">Total Reviews</div>
                  <div className="stat-value">{reviews}K</div>
                </div>
              </div>
              {/* btn */}
              <div>
                <button
                  onClick={() => handleInstallBtn(id)}
                  disabled={isInstalled}
                  className="btn btn-success"
                >
                  {isInstalled ? `Installed` : `Install Now (${size} MB)`}
                </button>
              </div>
            </div>
          </div>
        </section>
        <hr className="border-t border-gray-300 mt-2" />

        {/* ratings section */}
        <section className="w-full mt-8">
          <h1 className="text-xl font-medium mb-2">Ratings</h1>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={sortedRatings} layout="vertical">
              <XAxis type="number"></XAxis>
              <YAxis dataKey="name" type="category"></YAxis>
              <Tooltip></Tooltip>
              <Bar dataKey="count" fill="#ff8811" />
            </BarChart>
          </ResponsiveContainer>
        </section>
        <hr className="border-t border-gray-300 mt-2" />

        {/* description section */}
        <section className="w-full mt-8">
          <h1 className="text-xl font-medium mb-2">Description</h1>
          <p className="text-justify">{description}</p>
        </section>
      </div>
    </div>
  );
};

export default AppCardDetail;

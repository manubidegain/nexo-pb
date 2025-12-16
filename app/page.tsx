import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Nexo Pickleball"
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <a href="#vision" className="text-gray-700 hover:text-nexo-cyan transition-colors">
                Vision
              </a>
              <a href="#market" className="text-gray-700 hover:text-nexo-cyan transition-colors">
                Market
              </a>
              <a href="#uruguay" className="text-gray-700 hover:text-nexo-cyan transition-colors">
                Uruguay
              </a>
              <a href="#financials" className="text-gray-700 hover:text-nexo-cyan transition-colors">
                Financials
              </a>
            </div>
            <a
              href="mailto:asherloudonweiss@gmail.com"
              className="bg-nexo-cyan text-white px-6 py-2 rounded font-bold hover:bg-nexo-dark transition-all text-sm inline-block"
            >
              Contact Investors
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 lg:px-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-block bg-nexo-lime/20 text-nexo-dark px-4 py-2 rounded-full text-sm font-bold mb-6">
              INVESTOR DECK 2024
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-nexo-dark leading-tight">
              Pickleball has taken off and will continue to grow across
              <span className="text-nexo-cyan"> North America</span>
            </h1>
          </div>

          {/* America's Fastest Growing Sport Stats */}
          <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 mb-8">
            <div className="inline-block bg-nexo-lime px-6 py-2 rounded text-nexo-dark font-bold mb-8 text-lg">
              America's Fastest Growing Sport
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-nexo-dark mb-2">51.8%</div>
                <div className="text-sm text-gray-600">Increase in players<br />from 2022-23</div>
              </div>
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-nexo-dark mb-2">36.5M</div>
                <div className="text-sm text-gray-600">Players in the US</div>
              </div>
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-nexo-dark mb-2">13,969</div>
                <div className="text-sm text-gray-600">Number of Places to<br />Play in the US</div>
              </div>
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-nexo-dark mb-2">$152.8M</div>
                <div className="text-sm text-gray-600">Pickleball Paddle<br />Market</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* South America Opportunity */}
      <section id="market" className="py-20 px-8 lg:px-12 bg-white relative overflow-hidden">
        {/* Background SVG */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute left-0 top-0 h-full w-auto" viewBox="0 0 1305 810" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-20.7517 -4.70221L227.807 857.274L-77.8457 865.63V165.996L-20.7517 -4.70221Z" fill="#00C2C0"/>
            <path d="M-11.6302 20.3818L230.088 880.078" stroke="#E7E3E6" strokeWidth="34"/>
            <path d="M92.0712 357.503L-176.238 574.957" stroke="#E7E3E6" strokeWidth="34"/>
            <path d="M131.865 516.358L377.72 379.835C392.565 370.759 410.3 367.649 427.348 371.134L685.247 423.846C699.278 426.714 713.854 425.129 726.941 419.311L1207.52 205.68" stroke="#E7E3E6" strokeWidth="33.103"/>
            <path d="M1259.77 222.039C1261.11 222.658 1261.64 223.276 1261.75 224.365C1261.85 225.455 1261.64 225.912 1259.46 226.853C1254.75 228.964 1247.36 227.472 1246.95 224.312C1246.55 221.151 1255.04 219.659 1259.89 222.039H1259.77ZM1217.68 212.37C1221.39 214.118 1225.75 219.807 1224.97 221.784C1224.04 224.164 1220.05 222.725 1216.33 218.637C1213.64 215.732 1212.7 213.258 1213.74 212.007C1214.69 211.026 1215.2 211.066 1217.8 212.37H1217.68ZM1292.37 211.536C1292.37 213.298 1290.44 216.243 1287.35 219.094C1280.63 225.401 1279.59 220.439 1286.26 213.715C1289.89 210.192 1292.49 209.264 1292.49 211.536H1292.37ZM1238.41 187.748C1239.39 188.422 1240.19 189.307 1240.77 190.336C1241.36 191.365 1241.7 192.512 1241.78 193.692C1241.71 194.863 1241.38 196.003 1240.81 197.028C1240.24 198.052 1239.44 198.935 1238.48 199.608C1237.32 200.172 1236.04 200.464 1234.75 200.464C1233.46 200.464 1232.18 200.172 1231.02 199.608C1229.49 198.596 1228.43 197.025 1228.05 195.234C1227.67 193.443 1228.02 191.576 1229 190.034C1229.47 189.247 1230.09 188.562 1230.82 188.02C1231.56 187.477 1232.4 187.087 1233.29 186.874C1234.17 186.661 1235.1 186.629 1236 186.779C1236.9 186.929 1237.76 187.258 1238.54 187.748H1238.41ZM1277.1 185.932C1281.65 188.729 1281.61 196.072 1277 198.963C1276.08 199.511 1275.06 199.865 1274 200.003C1272.94 200.141 1271.86 200.06 1270.83 199.765C1269.81 199.47 1268.85 198.967 1268.03 198.288C1267.2 197.609 1266.52 196.768 1266.04 195.816C1265.29 194.518 1264.98 193.02 1265.14 191.533C1265.29 190.047 1265.91 188.647 1266.91 187.533C1268.12 186.028 1269.85 185.03 1271.76 184.734C1273.67 184.438 1275.61 184.866 1277.22 185.932H1277.1ZM1209.87 173.157C1212.39 176.99 1210.48 187.479 1207.28 187.479C1205.83 187.479 1204.49 184.332 1204.49 181.024C1204.55 174.139 1207.66 169.634 1209.93 173.157H1209.87ZM1299.96 170.777C1301.16 173.265 1301.67 180.607 1300.74 182.772C1299.65 185.462 1298.42 185.314 1296.82 182.315C1295.62 179.989 1295.47 171.086 1296.56 169.742C1297.65 168.397 1298.94 168.679 1299.98 170.777H1299.96ZM1256.78 158.473C1263.76 162.144 1261.28 172.996 1253.42 172.996C1247.32 172.996 1243.34 165.869 1246.85 161.162C1249.44 157.639 1253.33 156.576 1256.8 158.473H1256.78ZM1226.16 146.733C1226.37 148.481 1225.33 150.498 1222.95 152.932C1219.33 156.657 1215.3 157.585 1214.99 154.842C1214.63 151.749 1221.55 144.81 1224.66 145.173C1225.71 145.28 1226.07 145.644 1226.18 146.733H1226.16ZM1281.45 145.697C1283.99 147.042 1288.33 151.278 1288.33 152.569C1288.32 152.806 1288.24 153.034 1288.1 153.227C1287.96 153.42 1287.77 153.569 1287.55 153.658C1286.37 154.129 1281.24 151.439 1278.72 148.952C1274.7 145.119 1276.35 143.129 1281.46 145.697H1281.45ZM1257.82 138.247C1262.06 140.318 1259.06 143.156 1252.59 143.102C1248.41 143.102 1245.76 141.972 1246.03 140.265C1246.3 138.557 1249.23 137.32 1252.9 137.32C1254.59 137.27 1256.27 137.586 1257.83 138.247H1257.82ZM1241.78 134.724C1233.9 136.274 1226.5 139.64 1220.15 144.554C1213.45 149.596 1208.09 156.222 1204.57 163.84C1201.05 171.457 1199.47 179.829 1199.98 188.205C1201.33 211.738 1218.04 230.888 1241.98 236.159C1249.2 237.194 1256.53 237.112 1263.72 235.917C1282.04 231.667 1295.9 219.565 1302.05 202.5C1305.88 191.372 1305.88 179.282 1302.05 168.155C1295.63 150.512 1280.9 138.153 1261.96 134.536C1255.27 133.488 1248.45 133.552 1241.78 134.724Z" fill="#003633"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-nexo-dark px-6 py-2 rounded text-sm font-bold mb-6">
                MARKET OPPORTUNITY
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-nexo-dark leading-tight">
                Yet despite exponential growth in North America and other markets, pickleball has barely penetrated
                <span className="text-nexo-cyan"> South America</span>.
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-cyan-50 rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-nexo-dark mb-3">283M</div>
                <div className="text-sm text-gray-600">People in Uruguay, Brazil,<br />Argentina and Chile</div>
              </div>
              <div className="bg-cyan-50 rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-nexo-dark mb-3">35</div>
                <div className="text-sm text-gray-600">Known Pickleball Courts in All<br />Those Countries Combined</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 px-8 lg:px-12 bg-nexo-cyan">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <div className="text-sm font-bold mb-4 tracking-wider">OUR VISION</div>
              <div className="h-1 w-16 bg-white mb-6"></div>
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-nexo-dark leading-tight">
                Lead the launch and growth of pickleball across South America
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Go to Market Strategy */}
      <section className="py-20 px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block bg-nexo-lime px-6 py-3 rounded text-nexo-dark font-bold mb-12 text-lg">
            Go to market strategy
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="mb-6 h-20 flex items-center">
                <Image
                  src="/images/paleta1.png"
                  alt="Build Our Own Clubs"
                  width={80}
                  height={80}
                  className="w-auto h-20 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-nexo-dark mb-4">Build Our Own Clubs</h3>
              <p className="text-gray-600">
                Build our own clubs in strategic markets to create buzz and introduce the sport in the right way.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="mb-6 h-20 flex items-center">
                <Image
                  src="/images/paleta2.png"
                  alt="Prove the Model"
                  width={80}
                  height={80}
                  className="w-auto h-20 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-nexo-dark mb-4">Prove the Model</h3>
              <p className="text-gray-600">
                Use our own locations to verify local interest and to validate the business model in different markets.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="mb-6 h-20 flex items-center">
                <Image
                  src="/images/paleta3.png"
                  alt="Franchise Model"
                  width={80}
                  height={80}
                  className="w-auto h-20 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-nexo-dark mb-4">Franchise Model</h3>
              <p className="text-gray-600">
                Build off of our corporate-owned clubs to franchise clubs across multiple South American markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Uruguay Focus */}
      <section id="uruguay" className="py-20 px-8 lg:px-12 bg-gradient-to-br from-cyan-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="flex justify-center">
              <Image
                src="/images/uruguay2.png"
                alt="Uruguay Map"
                width={500}
                height={500}
                className="w-full max-w-md h-auto object-contain"
              />
            </div>

            {/* Right Column - Stats */}
            <div className="grid gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
                <div className="text-5xl font- bold text-nexo-dark mb-3">3.4M</div>
                <div className="font-bold text-nexo-dark mb-2">People in Uruguay</div>
                <p className="text-sm text-gray-600">
                  Decent sized starting market and ability to expand to other South American markets from here.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
                <div className="text-5xl font-bold text-nexo-dark mb-3">$20K</div>
                <div className="font-bold text-nexo-dark mb-2">Household Disposable Income</div>
                <p className="text-sm text-gray-600">
                  One of the highest quality of life countries in South America and residents have money to spend.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
                <div className="text-5xl font-bold text-nexo-dark mb-3">100K</div>
                <div className="font-bold text-nexo-dark mb-2">Play padel regularly</div>
                <p className="text-sm text-gray-600">
                  This number continues to grow and Padel clubs are popping up frequently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Montevideo Club */}
      <section className="py-20 px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="inline-block bg-nexo-lime px-6 py-3 rounded text-nexo-dark font-bold mb-8">
                Making a big splash in Montevideo
              </div>
              <h3 className="text-3xl font-bold text-nexo-dark mb-6">
                The best place to start is with a pickleball club in Montevideo, the capital of Uruguay and the biggest city by far.
              </h3>
              <p className="text-gray-600 mb-4">
                We will start by buying a piece of property and converting it into pickleball courts and a clubhouse with a pro shop and café.
              </p>
            </div>
            <div className="bg-gray-100 rounded-xl p-8">
              <h4 className="text-xl font-bold text-nexo-dark mb-6">Main components of the club</h4>
              <div className="space-y-4">
                <div>
                  <div className="font-bold text-nexo-dark mb-2">The Courts</div>
                  <p className="text-sm text-gray-600">
                    There are only 3 courts in the country and many people haven't played the sport yet, which mostly has to do with no court availability and low awareness.
                  </p>
                </div>
                <div>
                  <div className="font-bold text-nexo-dark mb-2">Clubhouse, Café and Pro Shop</div>
                  <p className="text-sm text-gray-600">
                    A clubhouse with a café and pro shop are a big part of this vision as well. Uruguayan culture is very laid back and afternoon coffee and snacks is essentially a requirement.
                  </p>
                </div>
                <div>
                  <div className="font-bold text-nexo-dark mb-2">Programming</div>
                  <p className="text-sm text-gray-600">
                    Clinics, private lessons, leagues, ladders and tournaments are all essential to pushing people how to play, improving the quality of play and growing a pickleball movement in this new market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Year 1 Financials */}
      <section id="financials" className="py-20 px-8 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-nexo-lime px-6 py-2 rounded font-bold mb-4">
              Montevideo club
            </div>
            <h2 className="text-3xl font-bold text-nexo-dark">YEAR 1 FINANCIALS</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Revenue */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-nexo-dark mb-6">Revenue and Expenses</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-700">Membership Revenue</span>
                  <div className="text-right">
                    <div className="font-bold">$27,500</div>
                    <div className="text-xs text-gray-500">5.9%</div>
                  </div>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-700">Pay as You Play</span>
                  <div className="text-right">
                    <div className="font-bold">$244,500</div>
                    <div className="text-xs text-gray-500">52.4%</div>
                  </div>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-700">Clinics and Lessons</span>
                  <div className="text-right">
                    <div className="font-bold">$17,900</div>
                    <div className="text-xs text-gray-500">3.8%</div>
                  </div>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-700">Pro Shop</span>
                  <div className="text-right">
                    <div className="font-bold">$73,700</div>
                    <div className="text-xs text-gray-500">15.8%</div>
                  </div>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-700">Food and Beverage</span>
                  <div className="text-right">
                    <div className="font-bold">$38,400</div>
                    <div className="text-xs text-gray-500">8.2%</div>
                  </div>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-700">Corporate Events</span>
                  <div className="text-right">
                    <div className="font-bold">$15,000</div>
                    <div className="text-xs text-gray-500">3.2%</div>
                  </div>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-700">Sponsorships</span>
                  <div className="text-right">
                    <div className="font-bold">$50,000</div>
                    <div className="text-xs text-gray-500">10.7%</div>
                  </div>
                </div>
                <div className="flex justify-between py-3 bg-nexo-dark text-white px-4 rounded mt-4">
                  <span className="font-bold">Total Revenue</span>
                  <div className="text-right">
                    <div className="font-bold">$467,000</div>
                    <div className="text-xs">100%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Expenses */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-nexo-dark mb-6">Operating Costs</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-700">Operating Expenses</span>
                  <div className="text-right">
                    <div className="font-bold">$88,200</div>
                    <div className="text-xs text-gray-500">18.8%</div>
                  </div>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-700">Staffing Costs</span>
                  <div className="text-right">
                    <div className="font-bold">$100,300</div>
                    <div className="text-xs text-gray-500">21.5%</div>
                  </div>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-700">Total Expenses</span>
                  <div className="text-right">
                    <div className="font-bold">$188,500</div>
                    <div className="text-xs text-gray-500">40.3%</div>
                  </div>
                </div>
                <div className="flex justify-between py-3 border-b mt-6">
                  <span className="font-bold text-gray-900">Net Profit before Tax</span>
                  <div className="text-right">
                    <div className="font-bold">$278,500</div>
                    <div className="text-xs text-gray-500">59.6%</div>
                  </div>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-700">Corporate Taxes</span>
                  <div className="text-right">
                    <div className="font-bold">$69,600</div>
                    <div className="text-xs text-gray-500">14.9%</div>
                  </div>
                </div>
                <div className="flex justify-between py-3 bg-nexo-dark text-white px-4 rounded mt-4">
                  <span className="font-bold">Net Profit after Tax</span>
                  <div className="text-right">
                    <div className="font-bold">$208,900</div>
                    <div className="text-xs">44.7%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Year Projections for Montevideo */}
      <section className="py-20 px-8 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-nexo-dark text-center mb-12">
            5 year projections<br />
            <span className="text-2xl text-gray-600">For montevideo location</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-nexo-dark">
                  <th className="text-left py-4 px-4"></th>
                  <th className="text-center py-4 px-4 font-bold">2026</th>
                  <th className="text-center py-4 px-4 font-bold">2027</th>
                  <th className="text-center py-4 px-4 font-bold">2028</th>
                  <th className="text-center py-4 px-4 font-bold">2029</th>
                  <th className="text-center py-4 px-4 font-bold">2030</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-4 font-medium">Revenue</td>
                  <td className="text-center py-4 px-4">$467K</td>
                  <td className="text-center py-4 px-4 bg-nexo-cyan/10">$633K</td>
                  <td className="text-center py-4 px-4">$669K</td>
                  <td className="text-center py-4 px-4 bg-nexo-cyan/10">$725K</td>
                  <td className="text-center py-4 px-4 font-bold text-nexo-cyan">$785K</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 font-medium">Profit</td>
                  <td className="text-center py-4 px-4">$209K</td>
                  <td className="text-center py-4 px-4 bg-nexo-lime/20">$292K</td>
                  <td className="text-center py-4 px-4">$307K</td>
                  <td className="text-center py-4 px-4 bg-nexo-lime/20">$334K</td>
                  <td className="text-center py-4 px-4 font-bold text-nexo-lime">$367K</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5 Year South America Expansion */}
      <section className="py-20 px-8 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-nexo-lime px-6 py-2 rounded font-bold mb-4">
              5 year projections
            </div>
            <h2 className="text-3xl font-bold text-nexo-dark">For Nexo South America</h2>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-4 px-4 font-bold"></th>
                  <th className="text-center py-4 px-4 font-bold">2026</th>
                  <th className="text-center py-4 px-4 font-bold">2027</th>
                  <th className="text-center py-4 px-4 font-bold">2028</th>
                  <th className="text-center py-4 px-4 font-bold">2029</th>
                  <th className="text-center py-4 px-4 font-bold">2030</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b">
                  <td className="py-3 px-4"># of Owned Clubs</td>
                  <td className="text-center py-3 px-4">1</td>
                  <td className="text-center py-3 px-4">4</td>
                  <td className="text-center py-3 px-4">4</td>
                  <td className="text-center py-3 px-4">6</td>
                  <td className="text-center py-3 px-4 font-bold">6</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4"># of Franchised Clubs</td>
                  <td className="text-center py-3 px-4">0</td>
                  <td className="text-center py-3 px-4">2</td>
                  <td className="text-center py-3 px-4">15</td>
                  <td className="text-center py-3 px-4">50</td>
                  <td className="text-center py-3 px-4 font-bold">100</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Total # of Clubs</td>
                  <td className="text-center py-3 px-4">1</td>
                  <td className="text-center py-3 px-4">6</td>
                  <td className="text-center py-3 px-4">19</td>
                  <td className="text-center py-3 px-4">56</td>
                  <td className="text-center py-3 px-4 font-bold">106</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="py-3 px-4">Owned Club Revenue</td>
                  <td className="text-center py-3 px-4">$467,000</td>
                  <td className="text-center py-3 px-4">$2,034,000</td>
                  <td className="text-center py-3 px-4">$2,568,000</td>
                  <td className="text-center py-3 px-4">$3,666,000</td>
                  <td className="text-center py-3 px-4 font-bold">$4,226,000</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="py-3 px-4">Licensing Fees Revenue</td>
                  <td className="text-center py-3 px-4">$0</td>
                  <td className="text-center py-3 px-4">$100,000</td>
                  <td className="text-center py-3 px-4">$650,000</td>
                  <td className="text-center py-3 px-4">$1,750,000</td>
                  <td className="text-center py-3 px-4 font-bold">$2,500,000</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="py-3 px-4">Franchise Revenue</td>
                  <td className="text-center py-3 px-4">$0</td>
                  <td className="text-center py-3 px-4">$93,400</td>
                  <td className="text-center py-3 px-4">$733,700</td>
                  <td className="text-center py-3 px-4">$2,591,000</td>
                  <td className="text-center py-3 px-4 font-bold">$5,565,200</td>
                </tr>
                <tr className="border-b-2 border-nexo-dark bg-nexo-dark text-white">
                  <td className="py-4 px-4 font-bold">Total Revenue</td>
                  <td className="text-center py-4 px-4 font-bold">$467,000</td>
                  <td className="text-center py-4 px-4 font-bold">$2,227,400</td>
                  <td className="text-center py-4 px-4 font-bold">$3,951,700</td>
                  <td className="text-center py-4 px-4 font-bold">$8,007,000</td>
                  <td className="text-center py-4 px-4 font-bold">$12,291,200</td>
                </tr>
                <tr className="bg-nexo-cyan/10">
                  <td className="py-4 px-4 font-bold">Net Operating Profit before Tax</td>
                  <td className="text-center py-4 px-4 font-bold">$278,000</td>
                  <td className="text-center py-4 px-4 font-bold">$1,417,400</td>
                  <td className="text-center py-4 px-4 font-bold">$2,963,700</td>
                  <td className="text-center py-4 px-4 font-bold">$6,572,000</td>
                  <td className="text-center py-4 px-4 font-bold text-nexo-cyan">$10,669,200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Expansion Timeline */}
      <section className="py-20 px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-12">
            <div className="inline-block bg-nexo-lime px-6 py-2 rounded font-bold mb-8">
              Using our own operated clubs to prove the model before franchising across other south american countries
            </div>
            <div className="grid md:grid-cols-4 gap-8 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-nexo-cyan rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
                <div className="font-bold text-nexo-dark mb-2">2026</div>
                <p className="text-sm text-gray-600">Raise initial capital and build out initial club in Montevideo, UY.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-nexo-cyan rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
                <div className="font-bold text-nexo-dark mb-2">2027</div>
                <p className="text-sm text-gray-600">Open initial club in Montevideo and grow initial player base.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-nexo-cyan rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
                <div className="font-bold text-nexo-dark mb-2">2028</div>
                <p className="text-sm text-gray-600">Raise growth capital, open 3 more of our own clubs in Punta del Este, UY, Buenos Aires, AR and São Paulo, BR and begin franchising in Uruguay.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-nexo-cyan rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">4</div>
                <div className="font-bold text-nexo-dark mb-2">2029</div>
                <p className="text-sm text-gray-600">Begin franchising clubs across Argentina and Brazil.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Model */}
      <section className="py-20 px-8 lg:px-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-block bg-nexo-lime px-6 py-2 rounded font-bold mb-6">
                A path to owning the pickleball franchise market in South America
              </div>
              <h2 className="text-3xl font-bold text-nexo-dark mb-8">Franchise Model</h2>
              <div className="space-y-6">
                <div>
                  <div className="font-bold text-nexo-dark mb-2">Franchise fees</div>
                  <p className="text-gray-600">Flat licensing fee - $50K</p>
                  <p className="text-gray-600">Royalties on all revenue - 10%</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="font-bold text-nexo-dark mb-4">Franchise support</div>
              <div className="text-sm text-gray-600 mb-2">Franchising with Nexo gives you:</div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-nexo-cyan mr-2">●</span>
                  <span className="text-gray-600">Name and brand.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-nexo-cyan mr-2">●</span>
                  <span className="text-gray-600">Clear outline for introducing pickleball to a new South American market.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-nexo-cyan mr-2">●</span>
                  <span className="text-gray-600">Real estate support in finding the right location.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-nexo-cyan mr-2">●</span>
                  <span className="text-gray-600">Marketing assets and proven growth strategies.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-nexo-cyan mr-2">●</span>
                  <span className="text-gray-600">Booking and tournament organization technology developed in house.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Momentum Section */}
      <section className="py-20 px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column */}
            <div>
              <div className="inline-block bg-nexo-lime px-6 py-2 rounded font-bold mb-8 text-lg text-nexo-dark">
                Momentum is Already Building
              </div>
              <h2 className="text-4xl font-bold text-nexo-dark mb-6">
                Top players and brands are choosing to partner with us before launch
              </h2>
              <p className="text-gray-600 mb-10">
                — Clear proof of industry excitement and early traction.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-nexo-lime rounded-full flex items-center justify-center text-nexo-dark font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-nexo-dark mb-2">Signed Ambassadors:</h3>
                    <p className="text-gray-600">
                      Two of the world's top professional pickleball players (South American by birth) are now brand ambassadors.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-nexo-lime rounded-full flex items-center justify-center text-nexo-dark font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-nexo-dark mb-2">Experienced Advisors:</h3>
                    <p className="text-gray-600">
                      Signed on the top pro pickleball agency (co-owner of the Miami Pickleball Team), a senior sports executive with deep pickleball industry ties, and a multi-exited founder actively building in pickleball.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-nexo-lime rounded-full flex items-center justify-center text-nexo-dark font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-nexo-dark mb-2">Brand Sponsorship LOIs:</h3>
                    <p className="text-gray-600">
                      Leading paddle brands have signed LOIs to sponsor Nexo Pickleball's first location.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Images */}
            <div className="bg-nexo-cyan rounded-2xl p-8 relative">
              {/* Top Logos */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4 flex items-center justify-center">
                  <Image
                    src="/images/ppm.png"
                    alt="PPM"
                    width={120}
                    height={60}
                    className="w-auto h-12 object-contain"
                  />
                </div>
                <div className="bg-white/10 rounded-lg p-4 flex items-center justify-center">
                  <Image
                    src="/images/sixzero.png"
                    alt="SIX ZERO"
                    width={120}
                    height={60}
                    className="w-auto h-12 object-contain"
                  />
                </div>
              </div>

              {/* Player Cards */}
              <div className="space-y-6">
                {/* Federico Staksrud */}
                <div className="bg-white/95 rounded-xl p-6 flex gap-4 items-center">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/fede.png"
                      alt="Federico Staksrud"
                      width={100}
                      height={100}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-nexo-dark">FEDERICO STAKSRUD</h3>
                    <p className="text-sm text-gray-600 mb-2">Home country: <span className="font-bold">Argentina</span></p>
                    <p className="text-sm text-gray-600">World singles ranking: <span className="font-bold">2</span></p>
                    <p className="text-sm text-gray-600">World doubles ranking: <span className="font-bold">3</span></p>
                  </div>
                </div>

                {/* Eric Eackins */}
                <div className="bg-white/95 rounded-xl p-6 flex gap-4 items-center">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/eric.png"
                      alt="Eric Eackins"
                      width={100}
                      height={100}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-nexo-dark">ERIC EACKINS</h3>
                    <p className="text-sm text-gray-600 mb-2">Home country: <span className="font-bold">Brazil</span></p>
                    <p className="text-sm text-gray-600">World singles ranking: <span className="font-bold">49</span></p>
                    <p className="text-sm text-gray-600">World doubles ranking: <span className="font-bold">25</span></p>
                  </div>
                </div>
              </div>

              {/* Nexo Logo */}
              <div className="mt-8 flex justify-end">
                <Image
                  src="/images/logo.png"
                  alt="Nexo Pickleball"
                  width={120}
                  height={60}
                  className="w-auto h-16 object-contain opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-8 lg:px-12 bg-nexo-cyan">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">MEET THE TEAM</h2>
            <div className="inline-block bg-nexo-lime px-8 py-3 rounded font-bold text-nexo-dark text-lg">
              A Canadian and a Uruguayan on a mission to grow pickleball across South America
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 relative overflow-hidden rounded-full">
                <Image
                  src="/images/manu.png"
                  alt="Manu Bidegain"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-nexo-dark mb-2">Manu Bidegain</h3>
              <p className="text-gray-600 mb-4">Based in Montevideo, Uruguay</p>
              <p className="text-sm text-gray-600">Local Connector, Club Build Out and Operations</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 relative overflow-hidden rounded-full">
                <Image
                  src="/images/asher.png"
                  alt="Asher Weiss"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-nexo-dark mb-2">Asher Weiss</h3>
              <p className="text-gray-600 mb-4">Based in Massachusetts, USA</p>
              <p className="text-sm text-gray-600">Marketing, Sales and Partnerships</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 lg:px-12 bg-nexo-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Join the Pickleball Revolution in South America
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Unique investment opportunity in the fastest-growing sport.
            Virgin market, proven model, experienced team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:asherloudonweiss@gmail.com"
              className="bg-nexo-lime text-nexo-dark px-10 py-4 rounded font-bold text-lg hover:bg-white transition-all inline-block text-center"
            >
              Schedule Meeting
            </a>
            <a
              href="/docs/NexoDeck.pdf"
              download
              className="border-2 border-nexo-cyan text-nexo-cyan px-10 py-4 rounded font-bold text-lg hover:bg-nexo-cyan hover:text-white transition-all inline-block text-center"
            >
              Download Pitch Deck
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Image
                src="/images/logo.png"
                alt="Nexo Pickleball"
                width={120}
                height={60}
                className="h-10 w-auto mb-4"
              />
              <p className="text-gray-600 text-sm">
                Investor Relations & Business Development
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-nexo-dark">Investor Contact</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>asherloudonweiss@gmail.com</li>
                <li>Montevideo, Uruguay</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-nexo-dark">Documents</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/docs/NexoDeck.pdf" download className="text-nexo-cyan hover:underline">Pitch Deck (PDF)</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2024 Nexo Pickleball. Confidential - For Investors Only</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

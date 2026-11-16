/* ==========================================================
   CONTENT FILE: edit only this file to fill in your portfolio.
   - Text goes inside the quotes. One string = one paragraph.
   - Photos: copy the image into the assets/ folder, then set
     src: "assets/your-photo.jpg"  (leave "" to show a placeholder).
   - Anything left empty ([] or "") shows a dashed "to add" box
     telling you what the course expects in that section.
   ========================================================== */

window.SITE = {
  university: "KLE Technological University",
  campus: "Hubballi",
  course: "Social Innovation",
  tagline: "A record of our journey through the Social Innovation course, from first observation in the community to the final exhibition.",

  student: {
    name: "Trigun T Rayangoudar",
    usn: "01FE26BCS176",
    roll: "462",
    branch: "CSE",
    photo: "assets/photo.jpg"
  },

  faculty: {
    name: "Sandeep Dhaduti",
    position: "Lecturer, SI",
    photo: "assets/faculty.jpg",
    note: "Mentors the team and evaluates this portfolio."
  },

  /* Team members shown on the Introduction tab (first row = you) */
  team: [
    { name: "Trigun T Rayangoudar", srn: "01FE26BCS176", photo: "assets/photo.jpg" },
    { name: "Vishal C",     srn: "", photo: "assets/vishal.jpg" },
    { name: "Omkar K",      srn: "", photo: "assets/omkar.jpg" },
    { name: "Samarth K",    srn: "", photo: "assets/samarth.jpg" },
    { name: "Harshita",     srn: "", photo: "" },
    { name: "Swaroopa P",   srn: "", photo: "" },
    { name: "Shreenidhi",   srn: "", photo: "" }
    // add each teammate's USN in srn and a photo path in photo when you have them
  ],

  intro: {
    background: [
      "I'm a tech enthusiast with good hands-on experience in IoT and a front-end developer by practice. I have been working on two ERP software projects, which has taught me how real organisations depend on well-designed systems.",
      "I joined this course to look beyond code and understand the people and problems that technology should actually serve."
    ],
    interests: ["Internet surfing", "Research and development", "Basketball"],
    linkedin: "",        // full URL, e.g. "https://www.linkedin.com/in/your-id"
    email: "01fe26bcs176@kletech.ac.in"
  },


  /* ---------- 11 tabs, in the exact order the course requires ---------- */
  tabs: [
    { id: "home",          label: "Home" },
    { id: "introduction",  label: "Introduction" },
    { id: "innovators",    label: "Social Innovators" },
    { id: "observation",   label: "Phase 1: Observation" },
    { id: "problem",       label: "Phase 2: Problem Identification" },
    { id: "solution",      label: "Phase 3: Solution Discernment" },
    { id: "pilot",         label: "Phase 4: Pilot Testing & Feedback" },
    { id: "reflections",   label: "Phase 5: Reflections" },
    { id: "arc",           label: "ARC Framework" },
    { id: "takeaways",     label: "Takeaways from the Course" },
    { id: "exhibition",    label: "Exhibition" }
  ],

  /* ---------- Social innovators (not studied in class hours) ---------- */
  innovators: [
    { origin: "Indian", name: "Dr. Verghese Kurien", photo: "assets/kurien.jpg",
      bio: "Known as the Milkman of India, Verghese Kurien (1921 to 2012) was an engineer and dairy pioneer who worked with the Kaira District Cooperative Milk Producers' Union (Amul) in Anand, Gujarat. He received the Ramon Magsaysay Award and the Padma Vibhushan.",
      contribution: "He helped farmers pool their milk into village cooperatives, so they could sell directly instead of depending on middlemen. He then led Operation Flood, a national programme that scaled this cooperative model across India and turned the country into one of the world's largest milk producers.",
      reflection: "He did not hand farmers a solution from outside; he built a system that they owned. It shows that a social innovation lasts when the people it serves also run it, which is the same ownership gap we found at The Streat." },
    { origin: "Indian", name: "Sanjit \"Bunker\" Roy", photo: "assets/bunker-roy.jpg",
      bio: "Founder of the Barefoot College, set up in 1972 in Tilonia, Rajasthan. TIME named him one of the 100 most influential people in the world in 2010.",
      contribution: "The college trains rural people, many of them women with little or no formal schooling, to become solar engineers, teachers and health workers in their own villages. Its model values practical skill and community knowledge over degrees.",
      reflection: "He shows that expertise does not only come from a classroom. Trusting ordinary people to solve their own problems is the opposite of assuming we already know the answer, and it is what the Observation phase asks of us." },
    { origin: "Indian", name: "Harish Hande", photo: "assets/harish-hande.jpg",
      bio: "A Bengaluru-based social entrepreneur and engineer who co-founded SELCO India in 1995. He received the Ramon Magsaysay Award in 2011.",
      contribution: "SELCO designs solar lighting and energy solutions for poor households and small livelihoods, and works with banks and lenders so that customers can afford them through suitable financing. He treats energy access as a way to raise incomes, not just to switch on lights.",
      reflection: "He is an engineer who started from the user's actual need and its affordability, rather than from the technology. That is a useful reminder for us as engineering students that a solution fails if people cannot pay for it or maintain it." },
    { origin: "Indian", name: "Jadav \"Molai\" Payeng", photo: "assets/jadav-payeng.jpg",
      bio: "Known as the Forest Man of India, he is from Majuli island in Assam and received the Padma Shri.",
      contribution: "Starting as a teenager, he planted trees on a barren sandbar of the Brahmaputra river, year after year. Over decades it grew into a forest that is home to a variety of wildlife.",
      reflection: "He had no funding, committee or technology, only a small daily action repeated for a very long time. It supports a point from our own reflection notes: small daily practices can have a large environmental impact when they are sustained." }
  ],


  /* ---------- Phase pages: each section = one card on the page ---------- */
  pages: {

    observation: {
      lead: "Two visits: The Hub on campus (17 September 2026) and The Streat in the community (30 September 2026). What we learned, assumed, saw, and how it made us feel.",
      sections: [
        { title: "Community visit: The Streat",
          facts: [
            ["Place visited", "The Streat"],
            ["Address", "The Streat, Shirur Park Road, Hubli-28"],
            ["Date of visit", "30 September 2026"],
            ["Time of visit", "4:00 pm"],
            ["Batch", "D2"],
            ["Team members", "Vishal, Trigun R, Omkar G K, Harshita M, Swaroopa P, Shreenidhi B, Samarth U K"]
          ] },
        { title: "Session learnings",
          body: [
            "Before these sessions, we thought observing meant simply looking around. We learned that it is a skill: you slow down, notice small details, and write down what you actually see instead of what you expect to see.",
            "The biggest lesson for us was to keep an observation separate from an interpretation. \"There are 7 dustbins\" is an observation; \"waste collection is taken care of\" is only our guess. The 15-minute rule and the PLACE tags helped us stay honest about which was which."
          ] },
        { title: "Our assumptions before the visits",
          body: [
            "Before visiting The Streat, we assumed that having dustbins meant waste would be thrown and sorted properly, and that a busy food place would at least look clean inside. We were surprised to find mixed waste, insects near food and some shops that were dirtier inside than outside.",
            "Before visiting the Hub, we assumed that a small shop inside a college would be cheap to run, and that we would be free to take notes and photographs. We were surprised by the rent the shop owners pay and by the rules about writing and photography."
          ] },
        { title: "The Streat: observations from the 15-minute rule",
          bullets: [
            "We noticed that many PG students were present there.",
            "The food prices were quite high compared to the street food available outside.",
            "The washrooms were not properly maintained.",
            "There was an extra charge for bottled water.",
            "There was no regular RO water purifier available.",
            "Outside food was not allowed inside.",
            "Birthday celebrations were not allowed because cakes were not permitted.",
            "In the evening, many families visited the place to spend quality time together.",
            "There were 7 dustbins available, which helped to keep the area clean.",
            "The tables were cleaned whenever the staff were available.",
            "One of the shops was not properly maintained, and there were stains on the walls.",
            "The roof and the areas around the lights were not clean.",
            "There were plants surrounding the area.",
            "The vessels were not cleaned properly.",
            "The chimney was not properly cleaned or maintained."
          ] },
        { title: "The Streat: observations vs interpretations",
          note: "The letters in the Tag column are the PLACE-framework tags marked on the team's slides.",
          table: { head: ["#", "Observation", "Tag", "Interpretation"], rows: [
            ["1", "8 shops are present in The Streat.", "P", "Varieties of food items are available in The Streat."],
            ["2", "There are 7 dustbins present in The Streat.", "P", "Basic waste-collection infrastructure has been provided."],
            ["3", "6 fans were present inside The Streat which were not working.", "P", "Maybe there was poor maintenance of the fans."],
            ["4", "Both wet and dry waste are mixed together.", "A", "Waste segregation is not being practised."],
            ["5", "Rush time is around 6:30 PM onwards.", "L", "People gather there for evening snacks and meals."],
            ["6", "Footpath outside The Streat was occupied with 2-wheelers.", "L", "It made it difficult for people to walk on the footpath."],
            ["7", "No cleaning activity was observed during the visit.", "A", "The frequency or timing of cleaning may not be sufficient to maintain cleanliness."],
            ["8", "Outside foods are not allowed inside The Streat.", "A", "This encourages customers to purchase food from the stalls within The Streat."],
            ["9", "Tea and sandwich stalls kept their waste collected near their shop spaces.", "C", "Shopkeepers temporarily stored waste before disposal."],
            ["10", "All the shops followed a self-service mechanism.", "C", "It reduces the workload of the shopkeepers."],
            ["11", "The presence of insects near food was observed.", "E", "This created an uncomfortable feeling and raised hygiene concerns."],
            ["12", "Scattered waste was present near all the dustbins.", "E", "This made the surroundings look untidy and unpleasant."],
            ["13", "The washroom located behind the stalls stinks.", "E", "The bad smell made the surrounding environment uncomfortable."]
          ] } },
        { title: "The Streat: interaction with shop owners",
          lead2: "Interacted with: juice shop owner and sandwich junction shop owner (occupation: selling food items).",
          table: { head: ["Question we asked", "What they told us"], rows: [
            ["How do you usually dispose of the waste generated by your shop?", "The shop owners hand over the waste to the cleaning staff, who then dispose of it."],
            ["How often is garbage collected from this area?", "They said that the garbage is collected once a day."],
            ["Are the dustbins cleaned regularly, and are you satisfied with their maintenance?", "The shop owners were unsure about how the dustbins were cleaned, but they were satisfied with their maintenance."],
            ["Do customers usually put waste in the bins, or do they leave it outside?", "Some customers use the bins properly, but not everyone pays attention, especially when the area is crowded."],
            ["What are the busiest times of the day for your shop?", "It is usually busiest during lunch hours and in the evening."],
            ["What type of waste do you generate the most from your shop?", "Mostly food waste and disposable items such as plastic covers, cups, plates and containers. The amount increases during busy hours."],
            ["Do you segregate wet waste and dry waste usually?", "They were not aware of proper waste segregation and generally disposed of different types of waste together."]
          ] } },
        { title: "The Streat: reflection notes",
          cards: [
            { h: "What surprised us?", b: [
              "We were surprised to see that some shops had visible insects near food and waste.",
              "We noticed that waste was not always properly segregated.",
              "We were surprised that some shop interiors were less clean than the outside area.",
              "We also noticed that single-use plastic items were commonly used."
            ] },
            { h: "What confused us?", b: [
              "We were confused about why waste was not separated into different categories, even when bins were available.",
              "We wondered whether the problem was due to lack of awareness, limited space, or irregular waste collection.",
              "We were also unsure about who is responsible for cleaning the area around the shops: the shopkeepers, customers, or local authorities."
            ] },
            { h: "What made us uncomfortable?", b: [
              "Seeing insects around food and waste made us uncomfortable.",
              "The presence of food residue and unclean areas inside some shops was concerning.",
              "Seeing waste lying near the shops and the use of many disposable plastic items made us think about their environmental impact."
            ] },
            { h: "What we want to understand better", b: [
              "We understood that waste management is not only about throwing waste into a dustbin; segregation, collection, storage, and disposal are all important.",
              "We understood that shopkeepers and customers both have a role in keeping public spaces clean.",
              "We also understood that maintaining hygiene can be difficult for small street shops because of limited space, resources, and waste-collection facilities.",
              "Most importantly, we learned that small daily practices can have a larger environmental impact when repeated by many people."
            ] }
          ] },
        { title: "Community visit photos (The Streat)",
          photos: [
            { src: "assets/obs-geotagged-30sep.jpg", caption: "Geotagged team photo at The Streat (GPS stamp: 30 Sep 2026, 6:00 PM)" },
            { src: "assets/obs-candid-stall.jpg", caption: "Candid photo at a food stall" },
            { src: "assets/obs-candid-sandwich-junction.jpg", caption: "Candid photo at Sandwich Junction" }
          ] },
        { title: "Campus visit: The Hub",
          facts: [
            ["Place visited", "The Hub"],
            ["Date of visit", "17 September 2026"],
            ["Time of visit", "10:30 am"],
            ["Batch / Team no", "D2 / 1"],
            ["Team members", "Vishal, Trigun R, Omkar G K, Swaroopa P, Shreenidhi B, Harshita M"]
          ] },
        { title: "The Hub: observations from the 15-minute rule",
          bullets: [
            "We entered the Hub around 10:30 AM and noticed that there were already many students and faculty members present.",
            "There were different shops with tables and seating areas where people were eating and sitting.",
            "Many students were sitting with their friends, having lunch and talking to each other.",
            "We noticed cleaning staff cleaning the tables and eating area while people were using the space.",
            "A security guard was checking the ID cards of students entering the Hub.",
            "We also noticed that some shops were closed while others were operating."
          ] },
        { title: "The Hub: observations vs interpretations",
          note: "The letters in the Tag column are the PLACE-framework tags marked on the team's slides.",
          table: { head: ["#", "Observation", "Tag", "Interpretation"], rows: [
            ["1", "There are many tables and seats for students and faculty.", "P", "There is enough space for people to sit, eat and spend time in the Hub."],
            ["2", "The Hub has clean and well-maintained washrooms.", "P", "People can use the washrooms comfortably and maintain hygiene."],
            ["3", "There are different food shops and a vending machine inside the Hub.", "P", "Students and faculty have different options to get food and refreshments."],
            ["4", "Shop owners and staff are present in the shops and serve students and faculty.", "L", "Shop owners and staff regularly work in the Hub and interact with visitors."],
            ["5", "Cleaning staff regularly clean the tables, plates and eating area.", "L", "Cleaning staff play an important role in maintaining the Hub."],
            ["6", "A security guard checks the ID cards of students entering the Hub.", "L", "Security staff help control entry and check that students are authorized to enter."],
            ["7", "The clubs and private library are located on the first floor.", "A", "Different activities and facilities are arranged in separate areas."],
            ["8", "The private library requires a membership of around 2,000 for entry.", "A", "The library follows a membership-based system for accessing its facilities."],
            ["9", "Shop owners pay around 20,000 monthly rent along with water, electricity and cleaning charges.", "A", "Running a shop involves several regular expenses and follows a fixed payment system."],
            ["10", "Students who do not bring their lunch can eat at the Hub.", "C", "The food shops provide an alternative when students do not have their own lunch."],
            ["11", "Students in a hurry can buy food or drinks from the shops and vending machine.", "C", "Students can quickly get something to eat or drink when they do not have enough time for a full meal."],
            ["12", "Tea and coffee are available at affordable prices.", "C", "Students can get a quick and relatively affordable refreshment during breaks."],
            ["13", "Many students come with their friends and spend time talking while eating.", "E", "This creates a friendly and social atmosphere in the Hub."],
            ["14", "Many students and faculty members are present during lunch time.", "E", "The Hub feels lively and energetic when many people are present."],
            ["15", "Shop owners interact with students in a friendly manner.", "E", "Friendly interactions make the Hub feel comfortable and welcoming."]
          ] } },
        { title: "The Hub: interaction with the chai shop owner",
          lead2: "Interacted with: chai shop owner (occupation: food and beverage shop owner).",
          table: { head: ["Question we asked", "What they told us"], rows: [
            ["What items do students buy the most?", "Tea, cold drinks, chips and snacks are commonly bought by students."],
            ["How much is the monthly rent of the shop?", "The monthly rent is around \u20b920,000, apart from other charges."],
            ["What are the other expenses apart from rent?", "Electricity, water and cleaning charges are also paid separately."],
            ["At what time do you get the most customers?", "More customers come during lunch and college break times."],
            ["Which drinks or snacks are preferred by students during short breaks?", "Students usually prefer quick items like cold drinks, tea, chips and other snacks during short breaks."],
            ["Do students usually buy items individually or in groups?", "Students often come in groups with friends and buy snacks or drinks together."]
          ] } },
        { title: "The Hub: reflection notes",
          cards: [
            { h: "What surprised us?", b: [
              "Shop owners have to pay around Rs. 20,000 rent per month for a small shop area.",
              "They also pay additional electricity, water and cleaning charges.",
              "Some items in the vending machine are comparatively expensive."
            ] },
            { h: "What confused us?", b: [
              "Why we were not allowed to write or take photographs during our observation.",
              "How the cleaning service charges are divided among the different shops.",
              "When and how the security checking is carried out."
            ] },
            { h: "What made us uncomfortable?", b: [
              "The cleaning staff stopped us several times while we were writing our observations.",
              "We were asked not to take photographs, making it difficult to record our observations.",
              "We could not talk to the shop owners for long because they were busy serving customers."
            ] },
            { h: "What we want to understand better", b: [
              "How the Hub is maintained and the different rules people have to follow.",
              "The daily working routine of shop owners, cleaning staff and security staff.",
              "How shops, food areas, clubs and the library are managed within the Hub."
            ] }
          ] },
        { title: "Campus visit photos",
          photos: [
            { src: "assets/hub-geotagged-17sep.jpg", caption: "Geotagged team photo at the Hub (GPS stamp: 17 Sep 2026, 11:31 AM)" },
            { src: "assets/hub-walkway.jpg", caption: "Open walkway at the Hub" },
            { src: "assets/hub-entry-gates.jpg", caption: "Entry gates" },
            { src: "assets/hub-vending-machine.jpg", caption: "Vending machine inside the Hub" },
            { src: "assets/hub-washroom-water-cooler.jpg", caption: "Washroom wash basins and water cooler" }
          ] }
      ]
    },

    problem: {
      lead: "From a first look at The Streat to one finalised social challenge, backed by stakeholders, interviews and triangulation.",
      sections: [
        { title: "Visit details",
          facts: [
            ["Batch", "D2"],
            ["Team no", "1"],
            ["Place visited", "The Streat"],
            ["Address", "The Streat, Shirur Park Road, Hubli-28"],
            ["Team members", "Harshita, Vishal, Swaroopa, Omkar, Samarth, Trigun, Shreenidhi"]
          ] },
        { title: "Session learnings and insights",
          hint: "What did the problem identification sessions teach you?",
          body: [] },
        { title: "Stakeholders",
          table: { head: ["Level", "Stakeholders", "Why are they relevant?"], rows: [
            ["Primary", "1) Food-stall owners\n2) Customers", "1) They generate shop waste, handle it before collection, and influence day-to-day cleanliness around their stalls.\n2) Their use of bins affects whether waste is placed inside or scattered nearby."],
            ["Secondary", "1) The Streat management\n2) Nearby businesses and people using the footpath", "1) Management may influence bin placement, cleaning schedules, maintenance and rules for the common area; this role needs confirmation.\n2) The team observed two-wheelers occupying the footpath, which made walking on the footpath difficult."],
            ["Tertiary", "1) Local municipal corporation\n2) Public health / food-safety authorities", "1) They may influence public waste collection and disposal arrangements; the exact role at The Streat was not established during the visit.\n2) They are relevant to general food-hygiene concerns, including insects near food and unclean food-preparation areas."]
          ] } },
        { title: "Gaps in the community",
          table: { head: ["#", "Gap", "Evidence"], rows: [
            ["1", "Complete absence of source waste segregation", "All 7 dustbins collect co-mingled food slurry and plastic containers. 5 of the stall owners admitted to throwing biodegradable and recyclable waste into common bags."],
            ["2", "Lack of free basic drinking water (RO) infrastructure", "No centralized potable water dispenser installed. People are required to buy packaged single-use water bottles."],
            ["3", "Inadequate kitchen ventilation and overhead sanitation", "Exhaust chimneys above cooking stoves had heavy, unmaintained carbon grease coatings (Chinese food stall)."],
            ["4", "The washrooms are not being used", "They are not well-maintained, which discourages people from using them."],
            ["5", "Inadequate food storage and protection facilities", "Food ingredients and prepared items are exposed to dust, insects, and other contaminants when proper covered storage facilities are unavailable."]
          ] } },
        { title: "Indirect questioning",
          table: { head: ["#", "Asked to", "Question", "Answer"], rows: [
            ["1", "Momo's shop owner", "Are there any materials from your shop that can be reused?", "They usually use bamboo materials; they wash it after one use and reuse it again."],
            ["2", "Momo's shop owner", "What do you usually do before opening your shop?", "He usually opens his shop at 1:30 pm and does the usual food prep like chopping the vegetables, cleaning the utensils etc."],
            ["3", "Momo's shop owner", "What materials do you use the most for packing takeaway orders?", "They pack food in plastic containers for takeaway."],
            ["4", "Chinese food shop", "If you could make one small change to this area, what would it be?", "They answered that they would like to have a few more seats so that more customers can sit."],
            ["5", "Chaat shop owner", "What one change would make waste disposal easier for your shop?", "Timely waste collection, especially during peak hours, would help them manage the waste generated from their shop without it piling up near the stall."],
            ["6", "Chaat shop", "How do you separate food waste from other waste?", "Most waste is collected in one dustbin because separate bins for food waste and other waste are not available."],
            ["7", "Chaat shop", "Do customers dispose of leftover food properly?", "Not always; some people leave leftovers on tables or nearby areas."],
            ["8", "Tea stall", "How often do you notice the garbage being collected around your store?", "The fast food shopkeeper said that HDMC collects the garbage from the area once a day, usually in the morning."],
            ["9", "Juice shop", "How is the waste from juice and shake stalls disposed of?", "Fruit peel waste is temporarily accumulated in buckets near the stall and later mixed with plastic cups and straw waste into common bins, without separate processing."],
            ["10", "Chinese food shop", "What is one waste-disposal problem that people might overlook on this street?", "Small items like tissues and food wrappers can accumulate in corners."]
          ] } },
        { title: "Triangulation: source",
          qa: [
            { q: "Who did you speak to or observe?", a: [
              "Interviews: Spoke directly to the stall owners of Sandwich Junction, the Fruit Juice shop, the Tea stall, and the Chaat stall.",
              "Observation: Observed customers (primarily PG and college students, visiting families), stall workers handling food and cash, and the surrounding footpaths and seating spaces."
            ] },
            { q: "What are the issues different people reported?", a: [
              "Shop owners: Reported that garbage is collected only once a day (in the morning by HDMC), customers frequently leave food residue or plates on tables instead of using bins, and high rush hours (lunch and post-6:30 PM) cause rapid waste pileups in their limited stall spaces.",
              "Customers / visitors: Foul smells coming from the unmaintained washrooms located behind the stalls, lack of free regular RO drinking water, and lack of functional cooling (broken fans)."
            ] },
            { q: "What was the difference in their views?", a: [
              "Shop owners felt litter was primarily due to careless customer habits during busy hours.",
              "Customers perceived the area as unhygienic due to scattered waste around bins, foul washroom odors, and flies near food counters, feeling the maintenance and cleaning frequency were inadequate."
            ] }
          ] },
        { title: "Triangulation: method",
          stats: [ { n: "8", l: "operational food shops" }, { n: "7", l: "single-compartment dustbins" }, { n: "6", l: "non-functioning fans" } ],
          qa: [
            { q: "What did you directly observe?", b: [
              "Counted exactly 8 operational food shops, 7 single-compartment dustbins, and 6 non-functioning fans inside The Streat.",
              "Observed wet food leftovers mixed together with dry plastic cups, plates, and wrappers in all bins (complete lack of waste segregation).",
              "Observed scattered litter around dustbin bases, flies/insects hovering near food display items, greasy exhaust chimneys (Chinese food stall), stained walls."
            ] },
            { q: "Whom did you interview?", a: [
              "3 vendors, a few students, and 2 sweepers in informal, semi-structured interviews, which confirmed the problem is daily, not exceptional."
            ] },
            { q: "Records, photos or any other evidences?", a: [ "Refer to the geotagged photos below." ] }
          ] },
        { title: "Triangulation: time",
          stats: [ { n: "4×", l: "waste multiplied at 6:00 PM" }, { n: "1×", l: "cleaning stayed daily (night)" } ],
          qa: [
            { q: "When did you observe the challenge?", a: [ "On 30/09/2026, from 4:00 PM to 6:30 PM." ] },
            { q: "Does it happen occasionally or repeatedly?", a: [ "Repeatedly. Vendors say the same overflow recurs daily." ] },
            { q: "Is there evidence from any other time or day?", b: [
              "4:00 PM: tables sparsely occupied, but earlier trash still lingered.",
              "6:00 PM: waste multiplied 4× while cleaning stayed at 1× daily (night).",
              "Vendors confirm the same overflow at the 1:00 PM lunch and 6:00 PM tea time."
            ] }
          ] },
        { title: "Social challenges identified (individual)",
          table: { head: ["Challenge", "Raised by", "Evidence"], rows: [
            ["Non-compliance with food safety guidelines (FSSAI) for personal hygiene", "Vishal", "Food handlers across the food stalls prepare and serve food with bare hands without wearing gloves, face masks, or hairnets, creating direct risks of microbial and cross-contamination."],
            ["Many people occupy tables for timepass, causing a shortage of seating for other customers", "Omkar", "Many people were observed socializing at tables for long periods without ordering."],
            ["Irregular waste collection: cleaning staff visit only once a day, allowing waste to accumulate", "Harshita", "Waste bins were observed to contain accumulated waste, while additional waste was kept near some stalls, suggesting that the waste was not being cleared frequently throughout the day."],
            ["Food-preparation vessels maintenance", "Swaroopa", "Food-preparation vessels had visible food stains, and showed signs of inadequate cleaning and maintenance."],
            ["Limited awareness or practice of wet/dry waste segregation", "Shreenidhi", "The shopkeepers were not aware of proper segregation and disposal of wet and dry type of waste."],
            ["Insufficient dustbins: not enough bins to collect waste", "Samarth", "Waste was left near stalls due to a lack of dustbins."],
            ["Poor maintenance of washroom facilities", "Trigun", "Washrooms and their surrounding areas had an unpleasant smell, tobacco stains and lack of water supply."]
          ] } },
        { title: "Finalized social challenge",
          callout: "At The Streat, wet and dry waste are mixed in shared single-compartment dustbins and collected only once a day, even though waste multiplies during peak hours. As a result, food-preparation areas and common facilities such as washrooms are left unhygienic and poorly maintained.",
          body: [ "Evidence: During our visit, we observed waste mixed in dustbins and additional waste left near some stalls. Food-preparation vessels had visible food stains, and the washroom facilities appeared poorly maintained. These conditions highlighted the need for better waste disposal practices, regular cleaning, and improved hygiene management to maintain a clean and healthy environment for shopkeepers and visitors." ] },
        { title: "Root cause analysis: Five Whys",
          steps: [
            "Why 1: Why is the environment unhygienic? Because waste accumulates and food-preparation and common areas are not maintained properly.",
            "Why 2: Why does waste accumulate? Because wet and dry waste are mixed, and collection is not frequent enough.",
            "Why 3: Why is waste mixed? Because separate bins for wet and dry waste are not available.",
            "Why 4: Why is waste collection insufficient? Because collection generally happens once a day, even though waste increases during peak hours.",
            "Why 5: What is the underlying issue? Inadequate waste-management arrangements, insufficient collection frequency and poor maintenance practices."
          ] },
        { title: "Formal Problem Statement",
          hint: "Write the final formal Problem Statement once your root cause analysis is done.",
          callout: "" },
        { title: "Community visit photos",
          photos: [
            { src: "assets/pi-geotagged-26oct.jpg", caption: "Geotagged team photo at The Streat (GPS stamp: 26 Oct 2026, 1:02 PM)" },
            { src: "assets/pi-candid-momo-stall.jpg", caption: "Candid photo at the momo stall" },
            { src: "assets/pi-candid-food-counter.jpg", caption: "Candid photo at a food counter" },
            { src: "assets/pi-blue-dustbin.jpg", caption: "Blue dustbin" },
            { src: "assets/pi-momos-tray.jpg", caption: "Momos tray" },
            { src: "assets/pi-notice-board.jpg", caption: "Notice board" }
          ] }
      ]
    },

    solution: {
      lead: "Deciding whether to solve, what to try, and why.",
      sections: [
        { title: "Session learnings",
          hint: "What did the solution discernment sessions teach you?",
          body: [] },
        { title: "To solve or not to solve",
          hint: "Narrate how the team decided whether this problem should be solved by you at all.",
          body: [] },
        { title: "Stakeholder needs and existing coping mechanisms",
          hint: "What do stakeholders need, and how do they cope with the problem today?",
          body: [] },
        { title: "Alternative solutions we explored",
          hint: "Compare the options you considered and say why each was selected or rejected.",
          table: { head: ["Alternative", "Why considered", "Selected / rejected, and why"], rows: [["", "", ""], ["", "", ""], ["", "", ""]] } },
        { title: "Chosen solution: feasibility, usefulness, sustainability",
          hint: "Analyse the chosen solution against these three questions.",
          body: [],
          cards: [
            { h: "Feasibility", t: "" }, { h: "Usefulness", t: "" }, { h: "Sustainability", t: "" }
          ] }
      ]
    },

    pilot: {
      lead: "Turning the idea into a small test, and what the field taught us.",
      sections: [
        { title: "Session learnings",
          hint: "What did the pilot testing sessions teach you?",
          body: [] },
        { title: "From idea to pilot plan",
          hint: "Write the pilot plan as clear steps.",
          steps: ["Step 1:", "Step 2:", "Step 3:", "Step 4:"] },
        { title: "Resources and stakeholders needed",
          hint: "Map what you needed (people, money, materials, permissions) and who had to be involved.",
          table: { head: ["Resource / stakeholder", "What was needed", "Status"], rows: [["", "", ""], ["", "", ""], ["", "", ""]] } },
        { title: "Feedback from the pilot",
          hint: "What feedback did you receive from the field or pilot test?",
          body: [],
          photos: [ { src: "", caption: "Pilot photo" }, { src: "", caption: "Pilot photo" } ] },
        { title: "Iterations and changes",
          hint: "What did you change after the feedback?",
          body: [] }
      ]
    },

    reflections: {
      lead: "Looking back across all the phases.",
      sections: [
        { title: "Our reflection",
          hint: "Write a narrative that connects observation, problem, solution and pilot into one story.",
          body: [],
          photos: [ { src: "", caption: "Project photo" }, { src: "", caption: "Project photo" }, { src: "", caption: "Project photo" } ] },
        { title: "How the idea became a pilot",
          hint: "Explain how you converted the idea into a pilot.",
          body: [] },
        { title: "Resources and stakeholders required",
          hint: "Summarise what and who the pilot needed.",
          body: [] },
        { title: "Feedback received",
          hint: "Summarise the feedback.",
          body: [] },
        { title: "Refinements that followed",
          hint: "Summarise what you improved afterwards.",
          body: [] }
      ]
    },

    arc: {
      lead: "The journey as a story: where we started, what happened, what changed our direction, and where we stand now.",
      sections: [
        { title: "Beginning",
          hint: "Your initial understanding, assumptions and the baseline challenges you started with.",
          body: [] },
        { title: "Experience and challenges",
          hint: "On-ground trials, problem identification, choosing the intervention, pilot testing and feedback loops.",
          body: [] },
        { title: "Turning points",
          hint: "The moments that changed the team's perspective or the project's direction.",
          body: [] },
        { title: "Where are you now",
          hint: "Your current stage of learning, growth and project maturity.",
          body: [] }
      ]
    },

    takeaways: {
      lead: "What this course changed in how we see problems and people.",
      sections: [
        { title: "A new view of social challenges",
          hint: "How did the course shift your perspective on social challenges?",
          body: [] },
        { title: "Growth as a student and future engineer",
          hint: "How have you grown?",
          body: [] },
        { title: "How I now solve everyday problems",
          hint: "What has changed in your approach to everyday problem-solving?",
          body: [] }
      ]
    },

    exhibition: {
      lead: "The final showcase and what it taught us.",
      sections: [
        { title: "Exhibition experience",
          hint: "Describe the day, the visitors who came and how they interacted with your work.",
          body: [] },
        { title: "Visitor feedback and insights",
          hint: "Summarise the feedback and what you can act on.",
          body: [] },
        { title: "Personal reflection on our work",
          hint: "How do you feel about the final work?",
          body: [] },
        { title: "Evidence of participation",
          hint: "Add exhibition photos or media.",
          photos: [ { src: "", caption: "Exhibition photo" }, { src: "", caption: "Exhibition photo" }, { src: "", caption: "Exhibition photo" } ] }
      ]
    }
  }
};
